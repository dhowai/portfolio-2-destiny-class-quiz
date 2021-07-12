/* Landing Page */
document.getElementById("loginbtn").addEventListener("click", loadHome)

document.getElementById("hero-image").style.display = "none";
document.getElementById("mainNav").style.display = "none";
document.getElementById("introd").style.display = "none";
document.getElementById("charater-class").style.display = "none";
document.getElementById("user-style").style.display = "none";
document.getElementById("footer").style.display = "none";

function loadHome() {
  
  document.getElementById("landingpage").style.display = "none";
  document.getElementById("hero-image").style.display = "block";
  document.getElementById("mainNav").style.display = "block";
  document.getElementById("introd").style.display = "block";
  document.getElementById("charater-class").style.display = "block";
  document.getElementById("user-style").style.display = "block";
  document.getElementById("footer").style.display = "flex";
}


/* Home Page */

// create needed constants
const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
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
    h2.textContent = `Which Guardian Will You be, ${name}?`;
    h3.textContent = `Welcome to the Destiny 2 Quiz, ${name}!`;

    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h2.textContent = `Which Guardian Will You be?`;
    h3.textContent = `Welcome to the Destiny 2 Quiz!`;

    forgetMe.style.display = "none";
    rememberMe.style.display = "block";
  }
}