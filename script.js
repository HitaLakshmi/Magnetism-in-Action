
// Function to add space and scroll down to result section
function scrollToResult() {
    const resultSection = document.getElementById("resultSection");
    resultSection.style.marginTop = "50px"; // Add enough space
    resultSection.scrollIntoView({ behavior: "smooth" });
  }
  
  
  
  
  
  
  
  
  function showWorkingPrinciple() {
      let principles = {
          'solenoid': `
              <div class="principle-card">
                  <h2>🔩 Solenoid - Working Principle</h2>
                  <p class="highlight"><strong>How It Works:</strong> When an electric current flows through the coil, it creates a <strong>magnetic field</strong> along the axis.</p>
                  <ul class="styled-list">
                      <li><strong>Number of Turns:</strong> More turns = Stronger field</li>
                      <li><strong>Current Strength:</strong> Higher current = Stronger field</li>
                      <li><strong>Core Material:</strong> Iron core increases strength</li>
                  </ul>
                  <h3>✨ Example:</h3>
                  <p class="example">Electromagnets in <strong>door locks</strong> and <strong>solenoid valves</strong>.</p>
              </div>
               <div class="video-container">
                      <iframe src="https://youtu.be/n63DAWvaHlk?si=TzZW64W4B_Z-ihC2" allowfullscreen></iframe>
                  </div>
          `,
          'toroid': `
              <div class="principle-card">
                  <h2>🌀 Toroid - Working Principle</h2>
                  <p class="highlight"><strong>How It Works:</strong> A toroid generates a <strong>confined magnetic field</strong> inside its circular shape, ensuring efficiency.</p>
                  <ul class="styled-list">
                      <li><strong>Low Magnetic Leakage</strong> - Keeps the field enclosed</li>
                      <li><strong>Highly Efficient</strong> - Used for stable inductors</li>
                  </ul>
                  <h3>✨ Example:</h3>
                  <p class="example">Used in <strong>transformers</strong> and <strong>inductors</strong>.</p>
              
               <div class="video-container">
                      <iframe src="https://youtu.be/roJO_T0eKDM?si=pCN-o2FThJcVEePk" allowfullscreen></iframe>
                  </div>
                  
                  </div>
          `,
          'straight': `
              <div class="principle-card">
                  <h2>⚡ Straight Wire - Working Principle</h2>
                  <p class="highlight"><strong>How It Works:</strong> A current-carrying straight wire generates a <strong>circular magnetic field</strong> around it.</p>
                  <p class="rule">📌 <strong>Right-Hand Rule:</strong> Thumb = Current, Fingers = Magnetic Field</p>
                  <h3>✨ Example:</h3>
                  <p class="example">Used in <strong>power transmission lines</strong>.</p>
              </div>
               <div class="video-container">
                      <iframe src="https://youtu.be/QCsuxZxrAhE?si=R1MsEnv9cXOp-pTB" allowfullscreen></iframe>
                  </div>
          `,
          'circular': `
              <div class="principle-card">
                  <h2>🔄 Current Loop - Working Principle</h2>
                  <p class="highlight"><strong>How It Works:</strong> A circular current loop acts like a <strong>bar magnet</strong>, creating a dipole-like magnetic field.</p>
                  <ul class="styled-list">
                      <li><strong>Strongest Field:</strong> At the center of the loop</li>
                      <li><strong>Magnetic Poles:</strong> Similar to a small bar magnet</li>
                  </ul>
                  <h3>✨ Example:</h3>
                  <p class="example">Used in <strong>MRI machines</strong> and <strong>sensors</strong>.</p>
              </div>
               <div class="video-container">
                      <iframe src="https://youtu.be/zyvipGRAwKw?si=ctZ_89KTHqXT5fdl" allowfullscreen></iframe>
                  </div>
          `
      };
     /* let principleSection = document.getElementById("workingPrinciple");
      principleSection.innerHTML = principles[currentMaterial];
      principleSection.classList.remove("hidden");
      principleSection.classList.add("animate-fade-in");*/
  
          document.getElementById("principleContent").innerHTML = principles[currentMaterial];
          document.getElementById("workingPrinciple").classList.remove("hidden");
          document.getElementById("details").classList.add("hidden");
          principleSection.scrollIntoView({ behavior: "smooth" });
         document.getElementById("workingPrinciple").scrollIntoView({ behavior: "smooth" });
      }
  
  
  
  
      function showDetails(material) {
          currentMaterial=material; 
  
          let details = {
      'solenoid': `
          <div class="details-card">
              <h2>🔩 Solenoid</h2>
              <p class="highlight">
                  <strong>What is it?</strong> A solenoid is a coil of wire that generates a <strong>magnetic field</strong> when current flows through it.
              </p>
              <ul class="styled-list">
                  <li>Used in <strong>electromagnets</strong>, <strong>relays</strong>, and <strong>solenoid valves</strong>.</li>
                  <li>Magnetic field strength increases with more <strong>turns</strong> and higher <strong>current</strong>.</li>
              </ul>
              <p class="example">✨ Example: Automatic door locking systems.</p>
          </div>
      `,
  
      'toroid': `
          <div class="details-card">
              <h2>🌀 Toroid</h2>
              <p class="highlight">
                  <strong>What is it?</strong> A toroid is a coil wound into a <strong>ring shape</strong>, often used in transformers and inductors.
              </p>
              <ul class="styled-list">
                  <li><strong>Efficient magnetic confinement</strong> due to its closed-loop shape.</li>
                  <li>Common in <strong>power transformers</strong> and <strong>RF circuits</strong>.</li>
              </ul>
              <p class="example">✨ Example: Toroidal inductors in power supplies.</p>
          </div>
      `,
  
      'straight': `
          <div class="details-card">
              <h2>⚡ Straight Wire</h2>
              <p class="highlight">
                  <strong>What is it?</strong> A current-carrying straight wire creates a <strong>circular magnetic field</strong> around it.
              </p>
              <p class="rule">📌 <strong>Right-Hand Rule:</strong> Thumb = Current, Fingers = Magnetic Field</p>
              <ul class="styled-list">
                  <li>Basic concept in <strong>electromagnetism</strong>.</li>
                  <li>Used in <strong>power transmission lines</strong>.</li>
              </ul>
              <p class="example">✨ Example: Electric wires in household circuits.</p>
          </div>
      `,
  
      'circular': `
          <div class="details-card">
              <h2>🔄 Current Loop</h2>
              <p class="highlight">
                  <strong>What is it?</strong> A circular current loop acts like a <strong>bar magnet</strong>, creating a dipole-like magnetic field.
              </p>
              <ul class="styled-list">
                  <li>Strongest magnetic field at the <strong>center</strong> of the loop.</li>
                  <li>Forms the basis of <strong>magnetic dipoles</strong>.</li>
              </ul>
              <p class="example">✨ Example: Magnetic fields in MRI machines.</p>
          </div>
      `
  };
  
          document.getElementById("detailsContent").innerHTML = details[material];
          document.getElementById("details").classList.remove("hidden");
          document.getElementById("workingPrinciple").classList.add("hidden");
          document.getElementById("details").scrollIntoView({ behavior: "smooth" });
      }
  
  
  
  
      
      function hideDetails() {
          // Hide details section
          document.getElementById("details").classList.add("hidden");
  document.getElementById("workingPrinciple").classList.add("hidden");
          // Scroll back to the image section
          document.getElementById("images").scrollIntoView({ behavior: "smooth" });
  
      }
      
  
      function hidePrinciple() {
          document.getElementById("workingPrinciple").classList.add("hidden");
          document.getElementById("details").classList.remove("hidden");
          document.getElementById("details").scrollIntoView({ behavior: "smooth" });
      }
  
      
      function goBack() {
      const lastViewed = document.querySelector('.item:visible');
      document.getElementById("details").classList.add("hidden");
      if (lastViewed) {
          lastViewed.scrollIntoView({ behavior: "smooth" });
      } else {
          document.getElementById("images").scrollIntoView({ behavior: "smooth" });
      }
  }
  let slides = document.querySelectorAll(".slide"); 
  function updateSlides() {
          slides.forEach((slide, index) => {
              slide.style.display = index === currentIndex ? "block" : "none";
          });
      }
  
      function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlides();
      }
  
      function prevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          updateSlides();
      }
  
      updateSlides();
  
  
      function showHistory() {
          var historyDiv = document.getElementById("history");
          historyDiv.style.display = "block";
      }
  
  
  
  
      function toggleWrapper() {
          let wrapper = document.getElementById('mainWrapper');
          wrapper.classList.toggle('expanded');
      }
  
      function toggleContent(contentId) {
          let content = document.getElementById(contentId);
          content.style.display = content.style.display === "block" ? "none" : "block";
          adjustWrapperHeight();
      }
      
      function clearContent(contentId) {
          document.getElementById(contentId).style.display = "none";
          adjustWrapperHeight();
      }
      
      function adjustWrapperHeight() {
          let wrapper = document.getElementById('mainWrapper');
          let contents = document.querySelectorAll('.content');
          let totalHeight = 200; // Default base height
          
          contents.forEach(content => {
              if (content.style.display === "block") {
                  totalHeight += content.scrollHeight;
              }
          });
          
          wrapper.style.maxHeight = totalHeight + "px";
      }











      document.addEventListener("DOMContentLoaded", function () {
        let items = document.querySelectorAll('.item');
        let currentIndex = 0;
        
        let nextButton = document.querySelector('.next');
        let prevButton = document.querySelector('.prev');
        let seeMoreButtons = document.querySelectorAll('.see-more');
    
        function showSlide(index) {
            items.forEach((item, i) => {
                item.style.display = (i === index) ? "block" : "none";
            });
        }
    
        // Event listener for Next button
        if (nextButton) {
            nextButton.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % items.length;
                showSlide(currentIndex);
            });
        }
    
        // Event listener for Previous button
        if (prevButton) {
            prevButton.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                showSlide(currentIndex);
            });
        }
    
        // Event listener for all "See More" buttons
        seeMoreButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                alert(`More details about: ${items[index].querySelector('.name').textContent}`);
            });
        });
    
        // Initialize first slide
        showSlide(currentIndex);
    });
    




    




    