//  Hero Section Code

function toggleDisplay(): void {
  // Get the element you want to toggle
  const heroSection = document.getElementById("hero_container");
  const formSection = document.getElementById("form-Section");

  if (heroSection) {
    // Toggle the display property
    heroSection.style.display = "none";
  } 
  if(formSection){
    formSection.style.display = "block";
  }
}

// Add an event listener to the button
const toggleButton = document.getElementById("buildBtn");
if (toggleButton) {
  toggleButton.addEventListener("click", toggleDisplay);
}


