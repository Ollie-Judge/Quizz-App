const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");

const start = () => {
  const randomQuestion = Math.floor(Math.random() * 4);
  console.log(questions[randomQuestion]);
  questionContainer.innerHTML = questions[randomQuestion].question;
};

startButton.addEventListener("click", start);

const questions = [
  {
    question: "what is 2+2?",
    answers: [
      { text: "4", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "what is 3+3?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "3", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    question: "what is the name of the planet?",
    answers: [
      { text: "space ball", correct: false },
      { text: "mars", correct: false },
      { text: "planet? what planet?", correct: false },
      { text: "earth", correct: true },
    ],
  },
];
