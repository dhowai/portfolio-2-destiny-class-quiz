/* Login */

function openLogin() {
    document.getElementById("login").style.display = "block";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
}

//Save User Email and Username to Localstorage 

const rememberMe = document.querySelector('.remember');
const form = document.querySelector("form");
const getEmail = document.querySelector("#email");
const getUser = document.querySelector("#user");
const submitBtn = document.querySelector("#submitForm");

submitBtn.addEventListener("click", function () {
    localStorage.setItem("email", getEmail.value);
    localStorage.setItem("user", getUser.value);

    nameDisplayCheck()
});

const h1 = document.querySelector('h1')

function nameDisplayCheck() {
  if (localStorage.getItem("user")) {
    let user = localStorage.getItem("user");
    h1.textContent = `Welcome ${user} to the Destiny 2 Quiz!`;
  }
}
