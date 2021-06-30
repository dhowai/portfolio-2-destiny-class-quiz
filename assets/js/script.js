/* Login */

function openLogin() {
    document.getElementById("login").style.display = "block";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
}

//Save User Email and Username to Localstorage

const signUp = e => {
  let formData = {
    email: document.getElementById('email').value,
    user: document.getElementById('user').value
  }
  localStorage.setItem('formData', JSON.stringify(formData));
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

/* Footer */

// Get the modal
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
span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}