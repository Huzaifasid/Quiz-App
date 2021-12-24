var quesArr = [
    {
        num: 1,
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: {
            a: "alt",
            b: "src",
            c: "title",
            d: "longdesc",
        },
        correctAns: "alt",
    },
    {
        num: 2,
        question: "Who is making the Web standards?",
        options: {
            a: "Mozilla ",
            b: "Microsoft",
            c: "Google",
            d: "The World Wide Web",
        },
        correctAns: "The World Wide Web",
    },
    {
        num: 3,
        question: "Choose the correct HTML element for the largest heading:",
        options: {
            a: "h6",
            b: "heading",
            c: "h1",
            d: "head",
        },
        correctAns: "h1",
    },
    {
        num: 4,
        question: "How can you make a numbered list?",
        options: {
            a: "dl",
            b: "ol",
            c: "ul",
            d: "list",
        },
        correctAns: "ol",
    },
    {
        num: 5,
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        options: {
            a: "validate",
            b: "placeholder",
            c: "formvalidate",
            d: "required",
        },
        correctAns: "required",
    },
];
var uName = document.getElementById("uName");
uName.innerHTML = prompt("Enter Name").toUpperCase();
var quizQues = document.getElementById("quizQues");
var quizOptionLi = document.getElementsByClassName("quizOptionLi");
var nextBtn = document.getElementById("nextBtn");
var quesCounter = 0;
var scoreCounter = 0;
var wrongAnsCounter = 0;
var resultBox = document.getElementById("resultBox");
var mainBox = document.getElementsByClassName("mainBox")[0];
var totalCOrrectAns = document.getElementById("totalCOrrectAns");
var totalWrongAns = document.getElementById("totalWrongAns");
var userName = document.getElementById("userName");
userName.innerHTML = uName.innerHTML;
var totalQues = document.getElementById("totalQues")
var footerCOunter = document.getElementById("footerCOunter")
totalQues.innerHTML = quesArr.length


for (var i = 0; i < quizOptionLi.length; i++) {
    quizOptionLi[i].setAttribute("onclick", "optionFun(this)");
}


function setQues() {
    quizQues.innerHTML = quesArr[quesCounter].question;

    quizOptionLi[0].innerHTML = quesArr[quesCounter].options.a;
    quizOptionLi[1].innerHTML = quesArr[quesCounter].options.b;
    quizOptionLi[2].innerHTML = quesArr[quesCounter].options.c;
    quizOptionLi[3].innerHTML = quesArr[quesCounter].options.d;
    footerCOunter.innerHTML = (quesCounter + 1) + "/" + quesArr.length

}

function nextQues() {

    quesCounter++;
    if (quesCounter < quesArr.length) {
        setQues();
    } else {


        mainBox.style.display = "none";
        resultBox.style.display = "block";

        totalCOrrectAns.innerHTML = scoreCounter;
        totalWrongAns.innerHTML = wrongAnsCounter;
    }
    for (var i = 0; i < quizOptionLi.length; i++) {
        quizOptionLi[i].style.pointerEvents = "visible";
        quizOptionLi[i].style.background = "transparent"

    }


    nextBtn.style.display = "none";
}

function optionFun(li) {

    var currentAns = quesArr[quesCounter].correctAns;

    if (currentAns === li.innerHTML) {

        scoreCounter++;
        li.style.background = "green"
    } else {

        wrongAnsCounter++;
        li.style.background = "red"

    }

    for (var i = 0; i < quizOptionLi.length; i++) {
        quizOptionLi[i].style.pointerEvents = "none";
    }
    nextBtn.style.display = "block";
}


var min = document.getElementById("min")

var sec = document.getElementById("sec")
var sec1 = 60
var min2 = 1
var interval = setInterval(function () {

    sec1--
    sec.innerHTML = sec1
   
    if (sec1 === 00) {
        min2--
        min.innerHTML = min2
    }
    if (min2 <= 0) {
        clearInterval(interval)
        mainBox.style.display = "none";
        resultBox.style.display = "block";

    }


}, 1000);