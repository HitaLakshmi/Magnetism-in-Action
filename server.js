const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "your_password", 
    database: "project" 
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL Database");
});


app.get("/get-conclusion", (req, res) => {
    const fluxValue = parseFloat(req.query.flux);

    if (isNaN(fluxValue)) {
        return res.status(400).json({ error: "Invalid flux value" });
    }

    const query = "SELECT * FROM flux_data WHERE magneticFlux <= ? ORDER BY magneticFlux DESC LIMIT 1";

    db.query(query, [fluxValue], (err, result) => {
        if (err) {
            console.error("Error fetching conclusion:", err);
            return res.status(500).json({ error: err.message });
        }

        if (result.length > 0) {
            res.json({ conclusion: result[0].conclusion, examples: result[0].examples });
        } else {
            res.json({ conclusion: "No conclusion found for this flux value.", examples: "No examples available." });
        }
    });
});


app.get("/search", (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) return res.json([]); 

    const sql = `SELECT Material, Properties, Material_type, Examples FROM data WHERE Material LIKE ?`;
    db.query(sql, [`%${searchTerm}%`], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});



