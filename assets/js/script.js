/* Login */

function openLogin() {
    document.getElementById("login").style.display = "block";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
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