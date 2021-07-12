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

