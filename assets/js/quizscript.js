/* Quiz */

// Event listener for clicks on the 'start the quiz' button. 
document.getElementById("beginquiz").addEventListener("click", startQuiz);
const beginQuiz = document.getElementById("beginquiz");

let currentQuestion, shuffledQuestions;

// When the button is clicked the 'intro' div is hidden and the question div is displayed
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question").style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    choiceButtonsHandler();
    updateQuestion();
}

function choiceButtonsHandler() {
  // Get all of the .choices elements
  const buttons = document.querySelectorAll(".choices .btn");
  // Onclick event listener to every element with the class of .choices
  for (const btn of buttons) {
    // When an element with .choices is clicked, run the function called optionButtonClicked
    btn.onclick = optionButtonClicked;
  }
}

// Create an array object to store all the quiz answers. Each selected answer should increase the category score by 1. The highest score will be the character 'type' in the results. 
const answerData = { // one object, with names as keys, scores as values
    Warlock: 0,
    Hunter: 0,
    Titan: 0
};

function updateQuestion() {
  const currentQuestionObj = (shuffledQuestions[currentQuestion]);
  const questionDiv = document.getElementById("question");
  questionDiv.querySelector(".question-title").innerHTML = "Question" + (currentQuestion + 1).toString() + ":";
  questionDiv.querySelector(".question-text").innerHTML = currentQuestionObj.question;
  const choiceButtons = questionDiv.querySelector(".choices").querySelectorAll(".btn");
  choiceButtons.forEach((btn, index) => {
    btn.setAttribute("data-score", currentQuestionObj.options[index].score);
    btn.innerHTML = currentQuestionObj.options[index].text;
  });
}

// Define what optionButtonClicked does
function optionButtonClicked(e) {
    var target = e.target; 
    console.log(" target is", target);
    // Get the current element's data-score value
    const selectedType = target.dataset.score; // score is the value
    // increase the selected answer's charater class 'type' by 1
    console.log("selectedType is ", selectedType);
    answerData[selectedType]++;
    currentQuestion++;
    if (currentQuestion === questions.length) {
      endQuiz();
      return;
    } 
    updateQuestion();
  }
  
  function endQuiz() {
    console.log("Scores were ", answerData);
    document.getElementById("question").style.display = "none";
    document.getElementById("result").style.display = "block";
    // Sort the scores in descending order and check the top 2 character types
    const sortedScores = Object.entries(answerData).sort((type1, type2) => type2[1] - type1[1]);
    myTypes = [sortedScores[0][0]];
    if (sortedScores[1][1] === sortedScores[0][1]) myTypes.push(sortedScores[1][0]);
    let result = '';
    if (myTypes.length === 1) result = "You are a " + myTypes[0];
    else result = "You could either be a " + myTypes.join(" or a ");
    document.querySelector("#result .resultText").innerHTML = result + "."

  }

  function restart() {
      beginQuiz.innerText = "Restart";
      document.getElementById("intro").style.display = "block";
      document.getElementById("result").style.display = "none";
      document.getElementById("question").style.display = "block";
      currentQuestion = 0;
      answerData = {
        Warlock: 0,
        Hunter: 0,
        Titan: 0
      };
      updateQuestion();
  }

  // ---- Questions and Choices ---- //

  const questions = [{
    question: "How would you prefer to get around?",
    options: [{
      score: "Hunter",
      text: "Double Jump"
    },
    {
      score: "Warlock",
      text: "Float"
    },
    {
      score: "Titan",
      text: "Jetpack"
    }
  ]
},
{
  question: "What ability would you choose?",
  options: [{
      score: "Titan",
      text: "Barricade"
    },
    {
      score: "Warlock",
      text: "Rift"
    },
    {
      score: "Hunter",
      text: "Dodge"
    }
  ]
},
{
  question: "What title appeals to you?",
  options: [{
      score: "Warlock",
      text: "Space magician"
    },
    {
      score: "Titan",
      text: "Absolute tank/unit"
    },
    {
      score: "Hunter",
      text: "Stealth gunslinger"
    }
  ]
},
{
  question: "Arc What super/alt sounds interesting to you?",
  options: [{
      score: "Hunter",
      text: "Staff wielder"
    },
    {
      score: "Titan",
      text: "Thunder fists"
    },
    {
      score: "Warlock",
      text: "Electric beam/fingers"
    }
  ]
},
{
  question: "Solar What super/alt sounds interesting to you?",
  options: [{
      score: "Titan",
      text: "Hammer time"
    },
    {
      score: "Warlock",
      text: "Flame blade"
    },
    {
      score: "Hunter",
      text: "Golden gun"
    }
  ]
},
{
  question: "Void What super/alt sounds interesting to you?",
  options: [{
      score: "Warlock",
      text: "Space energy ball"
    },
    {
      score: "Hunter",
      text: "Elusive archer"
    },
    {
      score: "Titan",
      text: "Shield defence"
    }
  ]
},
{
  question: "What play style appeals to you?",
  options: [{
      score: "Titan",
      text: "Tank"
    },
    {
      score: "Hunter",
      text: "Mobility"
    },
    {
      score: "Warlock",
      text: "Ability"
    }
  ]
},
{
  question: "Melee preference?",
  options: [{
      score: "Titan",
      text: "Punchy boi"
    },
    {
      score: "Hunter",
      text: "Knife to meet you"
    },
    {
      score: "Warlock",
      text: "Open palm slaps"
    }
  ]
}
];