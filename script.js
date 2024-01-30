const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");
const answerButtonsContainer = document.getElementById(
  "answerButtonsContainer"
);

const start = () => {
  const randomQuestion = Math.floor(Math.random() * 4);
  let question = questions[randomQuestion].question;
  questionContainer.innerHTML = question;

  questions[randomQuestion].answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.innerHTML = answer.text;
    answerButton.id = answer.text;
    answerButtonsContainer.appendChild(answerButton);
    console.log(answer.text);
  });
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
