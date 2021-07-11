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
let answerData = { // one object, with names as keys, scores as values
    warlock: 0,
    hunter: 0,
    titan: 0
};

function updateQuestion() {
  const currentQuestionObj = (shuffledQuestions[currentQuestion]);
  const questionDiv = document.getElementById("question");
  questionDiv.querySelector(".question-title").innerHTML = "Question " + (currentQuestion + 1).toString() + ":";
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
    document.getElementById("quiz-img").style.display = "none";
    document.getElementById("result").style.display = "block";
    // Sort the scores in descending order and check the top 2 character types
    const sortedScores = Object.entries(answerData).sort((type1, type2) => type2[1] - type1[1]);
    myTypes = [sortedScores[0][0]];
    if (sortedScores[1][1] === sortedScores[0][1]) myTypes.push(sortedScores[1][0]);
    let result = '';
    if (myTypes.length === 1) result = "You are a " + myTypes[0];
    else result = "You could either be a " + myTypes.join(" or a ");
    document.querySelector("#result .resultText").innerHTML = result + "."
    document.querySelector(".result-image").innerHTML=''; // clear it out
    myTypes.forEach(t => {
    let src=''
    if (t === "warlock")  src = 'warlock.jpg';
    else if (t === "titan") src = 'titan.jpg';
    else if (t === "hunter") src = 'hunter.jpg';
    if (src) document.querySelector(".result-image").innerHTML += `<img src="assets/images/pages/${t}2.png" />`
  })
  
  }

  function restart() {
      beginQuiz.innerText = "Restart";
      document.getElementById("intro").style.display = "block";
      document.getElementById("result").style.display = "block";
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
    question: "How would you prefer manoeuvre around the world?",
    options: [{
      score: "hunter",
      text: "Multiple Jumps"
    },
    {
      score: "warlock",
      text: "Float around"
    },
    {
      score: "titan",
      text: "Jetpack"
    }
  ]
},
{
  question: "What ability would you choose?",
  options: [{
      score: "titan",
      text: "Barricade, Personal sheild protects user from projectiles"
    },
    {
      score: "warlock",
      text: "Rift, Summons a healing or empowering well of light around the user"
    },
    {
      score: "hunter",
      text: "Dodge, Easily get away from dangerous situations"
    }
  ]
},
{
  question: "What title appeals to you?",
  options: [{
      score: "warlock",
      text: "Space Magician"
    },
    {
      score: "titan",
      text: "Master Chief Clone"
    },
    {
      score: "hunter",
      text: "A Lone Wolf"
    }
  ]
},
{
  question: "If you harnessed the power of electricity, what power would you want?",
  options: [{
      score: "hunter",
      text: "Arc staff, conjure a staff powered by arc light, and run around hitting things with it"
    },
    {
      score: "titan",
      text: "Fists of Havoc, supercharges your fists and slam the ground with the force of a maelstrom"
    },
    {
      score: "warlock",
      text: "Stormcaller, allows the user to float across the battlefield, electrocuting and disintegreating foe after foe"
    }
  ]
},
{
  question: "If you harnessed the power of the Sun, what power would you want?",
  options: [{
      score: "titan",
      text: "Hammer of Sol, activate to hurl flaming hammer projectiles at enemies, dealing significant damage with each hit "
    },
    {
      score: "warlock",
      text: "Daybreak, weave Solar Light into blades and smite your foes from the skies"
    },
    {
      score: "hunter",
      text: "Golden Gun, summons a flaming pistol that disintegrates enemies with Solar Light"
    }
  ]
},
{
  question: "If you harnessed the power of the Void, what power would you want?",
  options: [{
      score: "warlock",
      text: "Nova Bomb, hurl an explosive bolt of Void Light at the enemy, disintegrating those caught within its blast"
    },
    {
      score: "hunter",
      text: "Shadowshot, fires a non-lethal Void Anchor that slows affected enemies, causes them to take more damage, and prevents them from using abilities"
    },
    {
      score: "titan",
      text: "Sentinel Sheild, summon a shield of Void Light, Captain America style"
    }
  ]
},
{
  question: "If you harnessed the power of Stasis, what power would you want?",
  options: [{
      score: "titan",
      text: "Glacial Quake, summons a gauntlet which the user slams into the ground, creating shockwaves that form Stasis crystals, freezing nearby enemies"
    },
    {
      score: "hunter",
      text: "Silence and Squal, uses a pair of Kama blades that create a storm that tracks, slows, and damages enemies caught in its radius"
    },
    {
      score: "warlock",
      text: "Winter's Wrath, fires projectiles that instantly freeze opponents, before raising their staff and detonating the crystal to send out a Shatter Shockwave that obliterates frozen enemies"
    }
  ]
},
{
  question: "What play style appeals to you?",
  options: [{
      score: "titan",
      text: "Aggressive - Dives headfirst into battle"
    },
    {
      score: "hunter",
      text: "Defensive - Attacks at a distance"
    },
    {
      score: "warlock",
      text: "Support - Heals and empowers allies"
    }
  ]
},
{
  question: "What weapon type would you prefer to use?",
  options: [{
      score: "titan",
      text: "Shoguns"
    },
    {
      score: "hunter",
      text: "Snipers"
    },
    {
      score: "warlock",
      text: "Fusion Rifles"
    }
  ]
},
{
  question: "What would you use in close combat?",
  options: [{
      score: "titan",
      text: "Punchy boi"
    },
    {
      score: "hunter",
      text: "Knife to meet you"
    },
    {
      score: "warlock",
      text: "Open palm slaps"
    }
  ]
}
];