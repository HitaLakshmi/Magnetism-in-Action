Create table project.data( 
Material varchar(30),
Properties varchar(100),
Material_type varchar(30),
Examples varchar(30));


Insert into project.data values('Iron','High magnetic flux density and strong magnetization','	Ferromagnetic materials','	Pure iron , steel'),
('Nickel',' 	Moderate magnetic flux ; used parmanent magnets.','	Ferromagnetic materials	','Nickel alloys'),
('Cobalt','	High coercivity; often used in high-temperature magnets.','	Ferromagnetic materials	','Alnico alloys'),
('Alloys','	Special alloys enchance properties(like electric steel ).','	Ferromagnetic materials','	Permalloy Mu-metal'),
('Aluminum',' 	Weak response to external fields','	Paramagnetic materials','	Aluminum'),
('Platinum','	Moderate paramagnetism','	Paramagnetic materials	','Platinum'),
('Magnesium'	,'Very weak paramagntic effect	','Paramagnetic materials'	,'Magnesium'),
('Chromium',' 	Paramagnetic at high temperature.','	Paramagnetic materials','	Chromium'),
('Copper',' 	Does not support magnetic flux; repels weakly.','	Diamagnetic material','	Copper wires'),
('Gold','	Diamagnetic but witrh minimal response.','	Diamagnetic material','	Gold ornaments'),
('Bismuth','	One of the strongest diamagnetic materials.	','Diamagnetic material','	Pure bismuth'),
('Graphite','	Levitation possible in strong magnetic fields	','Diamagnetic material','	Graphite carbon'),
('Plastic',' 	No magnetic flux response','	Non-magnetic materials','	PVC, Nylon, Teflon'),
('Glass','	No interaction with magnetic flux','	Non-magnetic materials','	Silica, Borosilicate'),
('Rubber	','No effrct; used as insulation','	Non-magnetic materials','	Silicone, Neoprene'),
('Iron Oxides','	Magnetically soft materials	','Superparamagnetic materials',	'Magnetite(Fe3O4)'),
('Nanoparticles','	Superparamagnetic behavior in certain applications	','Superparamagnetic materials','	Ferrites'),
('YBCO'	,'High temperature superconductor	','Superconductors	','Yttrium Barium Copper oxide'),
('Niobium','	Superconducting properties at low temperatures','Superconductors','		Niobium alloys'),
('Lead	','Common superconducting material	','Superconductors','	Lead');



SELECT * from project.data ;












SELECT * FROM project.data;