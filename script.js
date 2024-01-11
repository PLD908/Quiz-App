//let construct or question bank
const questionBank = [
    {
    question: "what is the capital of France?",
    options: ["Paris", "London", "Berlin", "Mardrid"],
    answer: "Paris",
},
    {
    question: "what is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
},
    {
    question: "which country won the FIFA World Cup in 2018?",
    options: ["Argentina", "Brazil", "Germany", "France"],
    answer: "France",
},
]
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

//keeping track of the question, score and answer
let currentQuestion = 0;
let score = 0;
let incorrectAnswer = [];

function displayQuestion() {
    const questionData = questionBank[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionBank.question;

    const optionsElement = document.createElement("div");
    optionsElement.className = "options";
    
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement("label");
        option.className = "option";

        //radio for each option
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = shuffledOptions[i];
        const optionText = document.createTextNode(shuffledOptions[i]);
        
        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}