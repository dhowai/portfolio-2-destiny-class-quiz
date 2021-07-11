/* Login */

// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
