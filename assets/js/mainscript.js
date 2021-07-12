/* Landing Page */
document.getElementById("loginBtn").addEventListener("click", loadHome)
  
document.getElementById("hero-image").style.display = "none";
document.getElementById("mainNav").style.display = "none";
document.getElementById("introd").style.display = "none";
document.getElementById("charater-class").style.display = "none";
document.getElementById("footer").style.display = "none";

function loadHome() {
  
  document.getElementById("landingpage").style.display = "none";
  document.getElementById("hero-image").style.display = "block";
  document.getElementById("mainNav").style.display = "block";
  document.getElementById("introd").style.display = "block";
  document.getElementById("charater-class").style.display = "block";
  document.getElementById("footer").style.display = "flex";
}



/* Navigation */

function navFunction() {
    let x = document.getElementById("mainNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav"
    }
}

/* Home Page */

// create needed constants
const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector(".hero-text");
const h2 = document.querySelector("h2");
forgetMe.style.display = "none";

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);

  nameDisplayCheck();
});

forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");

  nameDisplayCheck();
});

function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `Which Guardian Will You be, ${name}?`;
    h2.textContent = `Welcome to the Destiny 2 Quiz, ${name}!`;

    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h1.textContent = `Which Guardian Will You be?`;
    h2.textContent = `Welcome to the Destiny 2 Quiz!`;

    forgetMe.style.display = "none";
    rememberMe.style.display = "block";
  }
}

document.body.onload = nameDisplayCheck;

/* Footer */

// Get the modal (make 1 modal/hide 1 element)
var modal1 = document.getElementById("aboutModal");
var modal2 = document.getElementById("contactModal");

// Get the button that opens the modal
var btn1 = document.getElementById("aboutBtn");
var btn2 = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event1) {
  if (event1 = modal1) {
    modal1.style.display = "none";
  } else if (event1 == modal2) {
    modal2.style.display = "none";
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
  if (event2.target == modal1) {
    modal1.style.display = "none";
  } else if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}

// Contact form in footer modal
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // IDs from contact form
      emailjs.sendForm('contact_service', 'contact_form', event.target)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
          event.target.reset();
  }); 
}

