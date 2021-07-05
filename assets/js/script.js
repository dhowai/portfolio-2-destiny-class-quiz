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

/* Quiz */

// Create a listener for clicks on the 'start the quiz' button on the front page. 
document.getElementById("beginquiz").addEventListener("click", startQuiz);

// When the button is clicked the 'intro' div is hidden and the first question div is displayed
function startQuiz () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("q1").style.display = "block";
}

// Create an array object to store all the quiz answers. Each selected answer should increase the category score by 1. The highest score will be the personality 'type' in the results. 
const answerData = { // one object, with names as keys, scores as values
    Warlock: 0,
    Hunter: 0,
    Titan: 0
};

// Get all of the .choices elements
var buttons = document.querySelectorAll(".choices");
// Add an onclick event listener to every element with a class of .choices
for (var i = 0 ; i < buttons.length ; i++) {
    // When an element with .choices is clicked, run the function called buttonClicked
    buttons[i].onclick = buttonClicked;
    }

// Define what buttonClicked does
function buttonClicked(e) {
    var target = e.target; // 1. `this` is parent, need target
    console.log(target);
    // Get the current element's data-score value
    var selectedType = target.dataset.score;   // 2. score is the value
    // Increase the selected answer's 'type' by 1
    console.log(selectedType);
    answerData[selectedType]++;  // 4. after change of structure
    // Hide the current question div
    this.parentElement.style.display = "none";
    // Work out what the next question div is
    var nextQuestion = this.parentElement.dataset.next;
    // Display the next question element
    document.getElementById(nextQuestion).style.display = "block";
    if (nextQuestion === 'result') endQuiz()
  }
  
  function endQuiz() {
  
    let myTypes = Object.keys(Object.fromEntries(Object.entries(answerData).reduce((b, a) => {
      if (b.length === 0) return [a]
      let bb = b[0];
      if (+a[1] > +bb[1]) b = [a];
      else if (+a[1] === +bb[1]) b.push(a)
      return b;
    }, [])))
    let result = ''
    if (myTypes.length === 1) result = 'You are a ' + myTypes[0];
    else result = 'You could either be a ' + myTypes.join(' or a ');
    document.getElementById('result').innerHTML = result;
  
  }