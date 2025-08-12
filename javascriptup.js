let icon = document.querySelector(".icon");
let ul = document.querySelector("nav ul");
let barIcon = document.querySelector("#bar i");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.classList.contains("showData")) {
    barIcon.className = "ri-close-line"; // close icon
  } else {
    barIcon.className = "ri-menu-line"; // menu icon
  }
});


// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});
