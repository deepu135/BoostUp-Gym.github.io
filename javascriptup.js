//navigation
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
  ul.classList.toggle("showData");
  console.log(ul);
  if(ul.className == "showData")
  {
    document.getElementById("bar").className="fa-solid fa-xmark";
  }
  else{
    document.getElementById("bar").className="ri-menu-line";
  }
})


// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});
