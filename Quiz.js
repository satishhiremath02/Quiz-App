const questions =[
    {
        question: "Which of the following operating systems is produced by IBM?",
        answers: [
            {text: "Windows", correct: false},
            {text: "OS-2", correct: true},
            {text: "DOS", correct: false},
            {text: "UNIX", correct: false},
        ]
    },
    {
        question: "What is a GPU?",
        answers: [
            {text: "Graphics Processing Unit", correct: true},
            {text: "Grouped Processing Unit", correct: false},
            {text: "Graphical Portable Unit", correct: false},
            {text: "Graphical Performance Utility", correct: false},
        ]

    },
    {
        question: "The abbreviation URL stands for:",
        answers: [
            {text: "User Regulation Law", correct: false},
            {text: "Unknown RAM Load", correct: false},
            {text: "Uniform Resource Locator", correct: true},
            {text: "Ultimate RAM Locator", correct: false},
        ]
    },
    {
        question: "What does DOCSIS stand for?",
        answers: [
            {text: "Data Over Cable Security Internet Std", correct: false},
            {text: "Data Over Cable Secure International Stds", correct: false},
            {text: "Data Over Cable Service Interface Specification", correct: true},
            {text: "Data Over Cable Service Internet Standard", correct: false},
        ]
    },
    {
        question: "Which company created the most used networking software in the 1980's",
        answers: [
            {text: "Microsoft", correct: false},
            {text: "Novell", correct: true},
            {text: "IBM", correct: false},
            {text: "Sun", correct: false},
        ]
    },
    {
        question: "Which one of the following is a search engine?",
        answers: [
            {text: "Macromedia Flash", correct: false},
            {text: "Netscape", correct: false},
            {text: "Librarians’ Index to the Internet", correct: false},
            {text: "Google", correct: true},
        ]
    },
    {
        question: "What is VCM?",
        answers: [
            {text: "Virtual Connection Manager", correct: false},
            {text: "Voice Controlled Modem", correct: false},
            {text: "Voice Communications Module", correct: false},
            {text: "Virtual Channel Memory", correct: true},
        ]
    },
    {
        question: "What is LCP?",
        answers: [
            {text: "Laggy Connection Problem", correct: false},
            {text: "Link Control Protocol", correct: true},
            {text: "Local Connection Protocol", correct: false},
            {text: "Lost Connection Problem", correct: false},
        ]
    },
    {
        question: "What does the abbreviation 'http' stand for?",
        answers: [
            {text: "High Task Termination Procedure", correct: false},
            {text: "Harvard Teletext Proof", correct: false},
            {text: "Hindustan Times Technical Proffesionals", correct: false},
            {text: "Hypertext Transfer Protocol", correct: true},
        ]
    },
    {
        question: "What is a spider?",
        answers: [
            {text: "A computer virus", correct: false},
            {text: "An application for viewing Web sites", correct: false},
            {text: "A program that catalogs Web sites", correct: true},
            {text: "A hacker who breaks into computer systems", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score= 0;

function startQuize(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML =questionNo + ". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);


    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function SelectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display= "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!` ;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display= "block";

}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuize();
    }
});


startQuize();