/* Login */

function openLogin() {
    document.getElementById("login").style.display = "block";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
}

//Save User Email and Username to Localstorage (might change)

const signUp = e => {
  let formData = {
    email: document.getElementById('email').value,
    user: document.getElementById('user').value
  }
  localStorage.setItem('formData', JSON.stringify(formData));
}