'use strict';

//Globals
let questionIdAsked = [];
let questionText = [];
let answerText = [];
let questionCount = 0;


async function populateQuestion() {

    let randomQuestionId;

    const getJSON = "./FoundationsQuestions.json";

    const questionRequest =new Request(getJSON);

    const questionResponse = await fetch(questionRequest);

    const questionToPopulate = await questionResponse.json();

    randomQuestionId =  Math.floor(Math.random() * questionToPopulate.questions.length)
    console.log(randomQuestionId);

    function randomQuestion() {
        randomQuestionId =  Math.floor(Math.random() * questionToPopulate.questions.length)
    } ;

    while (questionIdAsked.includes(randomQuestionId)) {
        randomQuestion();
    }

    //console.log(randomQuestionId);

    questionIdAsked.push(randomQuestionId);
    questionText.push(questionToPopulate.questions[randomQuestionId].body);
    answerText.push(questionToPopulate.questions[randomQuestionId].answer);

    //console.log(questionIdAsked);

    //console.log(questionToPopulate.questions.length);

    document.getElementById("QuestionText").innerHTML = questionToPopulate.questions[randomQuestionId].body
    questionCount++;
    document.getElementById("TestProgress").innerHTML = 'Question: ' + questionCount + '/' + questionToPopulate.questions.length;
}

function startTest() {
    console.log("Start Button Clicked");
    document.getElementById("TestStart").disabled = true;
    document.getElementById("ShowAnswer").hidden = false;
    nextQuestion();

};

function nextQuestion() {
    //console.log("Next Clicked");
    document.getElementById("AnswerText").hidden = true;
    document.getElementById("HideAnswer").hidden = true;
    document.getElementById("ShowAnswer").hidden = false;
    populateQuestion();
};

function showAnswer() {
document.getElementById("AnswerText").innerHTML = answerText[questionCount - 1];
document.getElementById("AnswerText").hidden = false;
document.getElementById("HideAnswer").hidden = false;
document.getElementById("ShowAnswer").hidden = true; 
}

function hideAnswer() {
    document.getElementById("AnswerText").hidden = true;
    document.getElementById("HideAnswer").hidden = true;
    document.getElementById("ShowAnswer").hidden = false; 

}

//Use to grab question in array right before current question looking at in the array. If at point 0 disable button.
function previousQustion() {

}
