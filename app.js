let loginBtn = document.getElementById("login-btn");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");
let SingupParent = document.getElementById("singup-parent");
let loginParent = document.getElementById("login-parent");
let emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailString;

function loginDataSave() {
    if (loginEmail.value.trim() !== "") {
        swal({
            title: "email not found!",
            icon: "error",
        });
        if (loginEmail.value.match(emailRegax)) {
            emailString = JSON.stringify(loginEmail.value);
            console.log(emailString)
            localStorage.setItem("email", emailString);

        }
        else {
            swal({
                title: "email inncorrect!",
                icon: "error",
            });
        }
    }
    else {
        swal({
            title: "email not found",
            icon: "error",
        });
    }

    if (loginPassword.value.trim() !== "") {
        let passwordString = JSON.stringify(loginPassword.value);
        localStorage.setItem("password", passwordString);

        console.log(loginPassword.value)
    }
    else {
        console.log(loginPassword.value)
        // alert("password ok ni hoa")
        swal({
            title: "password not found!",
            icon: "error",
        });
    }
    if (loginEmail.value.match(emailRegax) && loginPassword.value) {
        // alert(" hogya login")
        swal({
            title: "Sign Up Successfully!",
            icon: "success",
        });
        SingupParent.style.display = "block";
        SingupParent.style.display = "flex";
        loginParent.style.display = "none";
    }
}
// else{
//     swal({
//         title: " not found",
//         icon: "error",
//     });
// }
// }
let singupEmail = document.getElementById("singup-email");
let singupPassword = document.getElementById("singup-password");
function singupDataSave() {
    let emailParse = JSON.parse(localStorage.getItem("email", emailString))
    console.log(emailParse)
    let passwordParse = JSON.parse(localStorage.getItem("password", emailString))
    console.log(emailParse)
    if (singupEmail.value === emailParse) {
        // alert("email check")
    }
    else {
        swal({
            title: "email inncorrect!",
            icon: "error",
        });
        // alert("email si ni hai")
    }
    if (singupPassword.value === passwordParse) {
        // alert("password check")
    } else {
        alert("password si ni hai")
    }
    if (singupEmail.value === emailParse && singupPassword.value === passwordParse) {
        swal({
            title: "Login successfully",
            icon: "success",
        });
        setTimeout(function () { window.location.href = "./quiz.html" }, 1000)

    }

}
let html = [
    {
        question: "What does HTML stand for?",
        option1: " Hyperlinks and Text Markup Language ",
        option2: "Home Tool Markup Language",
        option3: "Hyper Text Markup Language  ",
        correctOption: "Hyper Text Markup Language  ",
    },
    {
        question: "Who is making the Web standards?",

        option1: "Microsoft ",
        option2: "Mozilla",
        option3: "The World Wide Web Consortium",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: " Choose the correct HTML element for the largest heading:",
        option1: `&lth1&gt`,
        option2: `&lth6&gt`,
        option3: `&ltHeading&gt`,
        correctOption: `&lth1&gt`,
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '&ltlinebreak&lt',
        option2: '&ltbr&gt',
        option3: '&ltbreak&gt',
        correctOption: "&ltbr&gt"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '&ltbody bg="gellow"&gt',
        option2: '&ltbackground&gtyellow&lt/background&gt',
        option3: '&ltbody style="background-color:yellow;"&gt',
        correctOption: '&ltbody style="background-color:yellow;"&gt'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '&ltstrong&gt',
        option2: '&ltb&gt',
        option3: '&lti&gt',
        correctOption: '&gtstrong&gt'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '&ltitalic&gt',
        option2: '&lti&gt',
        option3: '&ltem&gt',
        correctOption: "&ltem&gt"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '&lthttp://www.w3schools.coma&gt',
        option2: '&lta href="http://www.w3schools.com"&gtW3Schools&lt/a&gt',
        option3: '&lta url="http://www.w3schools.com"&gtW3Schools.com&lt/a&gt',
        correctOption: '&lta href="http://www.w3schools.com"&gtW3Schools&lt/a&gt'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '&lta href="url" target="new"&gt',
        option2: '&lta href="url" new&gt',
        option3: '&lta href="url" target="_blank"&gt',
        correctOption: '<a href="url" target="_blank"&gt'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '&lttable&gt &lttr&gt &lttd&gt',
        option2: '&lttable&gt &lthead&gt &lttfoot&gt',
        option3: '&lttable&gt &lttr&gt &lttt&gt',
        correctOption: "&lttable&gt &lttr&gt &lttd&gt"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '&ltdl&gt',
        option2: '&ltul&gt',
        option3: '&ltol&gt',
        option4: '&ltlist&gt',
        correctOption: "&ltol&gt"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '&ltol&gt',
        option2: '&ltlist&gt',
        option3: '&ltul&gt',
        option4: '&ltdl&gt',
        correctOption: "&ltul&gt"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '&ltimg alt="MyImage"&gtimage.gif&lt/img&gt',
        option2: '&ltimg href="image.gif" alt="MyImage"&gt',
        option3: '&ltimg src="image.gif" alt="MyImage"&gt',
        option4: '&ltimage src="image.gif" alt="MyImage"&gt',
        correctOption: '&ltimg src="image.gif" alt="MyImage"&gt'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        option1: '&ltiput type="check"&gt',
        option2: '&ltcheck&gt',
        option3: '&ltcheckbox&gt',
        option4: '&ltinput type="checkbox"&gt',
        correctOption: '&ltinput type="checkbox"&gt'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        option1: '&ltinput type="textfield"&gt',
        option2: '&ltinput type="text"&gt',
        option3: '&lttextfield&gt',
        option4: '&lttextinput type="textfield"&gt',
        correctOption: '&ltinput type="text"&gt'
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        option1: '&ltinput type="list"&gt',
        option2: '&ltlist&gt',
        option3: '&ltinput type="dropdown"&gt',
        option4: '&ltselect&gt',
        correctOption: '&ltselect&gt'
    },
    {
        question: 'What is the correct HTML for making a text area?',
        option1: '&ltinput type="textbox"&gt',
        option2: '&ltinput type="textarea"&gt',
        option3: '&lttextarea&gt',
        correctOption: '&lttextarea&gt'
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        option1: '&ltbackground img="background.gif"&gt',
        option2: '&ltbody bg="background.gif"&gt',
        option3: '&ltbody style="background-image:url(background.gif)"&gt',
        correctOption: '&ltbody style="background-image:url(background.gif)"&gt'
    }
    // sualeah obj
];
// console.log(allQuiz[2])

var css = [
    {
        question: 'What does CSS stand for?',
        option1: 'Colorful Style Sheet',
        option2: 'Computer Style Sheet',
        option3: 'Cascading Style Sheet',
        option4: 'Creative Style Sheet',
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        option1: '&lt stylesheet&gt  mystyle.css&lt/stylesheet&gt',
        option2: '&ltstyle src="mystyle.css"&gt',
        option3: '&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt',
        correctOption: '&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt'
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        option1: 'In the &ltbody&gt section',
        option2: 'In the &lthead&gt section',
        option3: 'At the end of the document',
        correctOption: 'In the &lthead&gt section'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        option1: '<&ltcss&gt',
        option2: '<&ltstyle&gt',
        option3: '<&ltscript&gt',
        correctOption: '<&ltstyle&gt'
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        option3: 'class',
        correctOption: 'style'
    },
    {
        question: 'Which is the correct CSS syntax?',
        option1: 'body{color: black;}',
        option2: '{body:color=black;}',
        option3: 'body:color=black;',
        option4: '{body;color:black;}',
        correctOption: 'body{color: black;}'
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        option1: '/*this is a comment*/',
        option2: '//this is a comment',
        option3: '//this is a comment//',
        option3: "'this is a comment",
        correctOption: '/*this is a comment*/'
    },
    {
        question: 'Which property is used to change the background color?',
        option1: 'bgcolor',
        option2: 'color',
        option3: 'background-color',
        correctOption: 'background-color'
    },
    {
        question: 'How do you add a background color for all &lth1&gt elements?',
        option1: 'h1 {background-color:#FFFFFF;}',
        option2: 'h1.all {background-color:#FFFFFF;}',
        option3: 'all.h1 {background-color:#FFFFFF;}',
        correctOption: 'h1 {background-color:#FFFFFF;}'
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        option1: 'color',
        option2: 'text-color',
        option3: 'fgcolor',
        correctOption: 'color'
    },
    {
        question: 'Which CSS property controls the text size?',
        option1: 'font-size',
        option2: 'text-style',
        option3: 'text-size',
        option4: 'font-style',
        correctOption: 'font-size'
    },
    {
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        option1: 'p {font-weight:bold;}',
        option2: '&ltp style="font-size:bold;"&gt',
        option3: '&ltp style="text-size:bold;"&gt',
        option4: 'p {text-size:bold;}',
        correctOption: 'p {font-weight:bold;}'
    },
    {
        question: 'How do you display hyperlinks without an underline?',
        option1: 'a {underline:none;}',
        option2: 'a {decoration:no-underline;}',
        option3: 'a {text-decoration:no-underline;}',
        option4: 'a {text-decoration:none;}',
        correctOption: 'a {text-decoration:none;}'
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        option1: 'text-style:capitalize',
        option2: 'text-transform:capitalize',
        option3: 'You can not do that with CSS',
        option4: 'transform:capitalize',
        correctOption: 'text-style:capitalize'
    },
    {
        question: 'Which property is used to change the font of an element?',
        option1: 'font-style',
        option2: 'font-weight',
        option3: 'font-family',
        correctOption: 'font-family'
    },
    {
        question: 'How do you make the text bold?',
        option1: 'style:bold;',
        option2: 'font:bold;',
        option3: 'font-weight:bold;',
        correctOption: 'font-weight:bold;'
    },
    {
        question: 'Which property is used to change the left margin of an element?',
        option1: 'margin-left',
        option2: 'padding-left',
        option3: 'indent',
        correctOption: 'margin-left'
    },
    {
        question: 'When using the padding property; are you allowed to use negative values?',
        option1: 'Yes',
        option2: 'No',
        correctOption: 'No'
    },
    {
        question: 'How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    },
    {
        question: 'How do you select an element with id "demo"?',
        option1: '#demo',
        option2: '.demo',
        option3: 'demo',
        option4: '*demo',
        correctOption: '#demo'
    }
]
let quesAns = 0;
let questions = document.getElementById("questions");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer = document.getElementsByName("answer");

let resultBox = document.getElementById("result-box");
let backgroundWhite = document.getElementById("background-white");
// console.log(backgroundWhite)
// console.log(resultBox);

let score = 0;
let sec = 1;
let milli = 59;
// let second = document.getElementById("second");
// let millisec = document.getElementById("milli-sec");
// let counter = document.getElementById("timer");

let timer = true;
let topic;
let newQuestion = document.getElementById("new-question");
let quizButton = document.getElementById("quizButton");
let logOutDiv = document.getElementById("log-out")
let quesNum = 1;
function select(language) {
    if (language === html) {

        topic = html;
    }
    else if (language === css) {
        topic = css
    }
    quizButton.style.display = "none";

    for (let i = 0; i < answer.length; i++) {
        if (answer[i].checked == true) {
            let userAnswer = (topic[quesAns - 1][`option${answer[i].value}`]);
            let correctOption = (topic[quesAns - 1][`correctOption`]);
            console.log(correctOption);
            console.log(userAnswer);
            if (userAnswer === correctOption) {
                score++
            }
            if (userAnswer) {
                sec = 1;
                milli = 59;
            }
        }
        // console.log(answer[i].checked)
        // console.log(topic[quesAns - 1][`option${answer[i].value}`])
        // topic[quesAns - 1][`option${answer[i].value}`]


    }
    if (quesAns > topic.length - 1) {
        quizParents.style.display = "none";
        logOutDiv.innerHTML = `
        <div class="result-page" >
        <button  onclick="login()">Log out</button>
        <button  onclick="restart()">Restart</button>
        </div>
        `;
        
        // alert((score / topic.length) * 100)
        timer = false;
        if ((score / topic.length) * 100 > 50) {
            console.log("end");
            var num = Math.round((score / topic.length) * 100)

            swal({
                title: "Good job!",
                text: `${num}  %`,
                icon: "success",
            })

        }
        else {
            var num = Math.round((score / topic.length) * 100)
            swal({
                title: "Better Than Next Time!",
                text: `${num}  %`,
                icon: "error",
            })
        }
    }
    else {
        quizParents.innerHTML = ` <div class="answer-timer-parent" id="new-question">
     <div id="questions" class="question" >Q${quesNum} ${topic[quesAns].question}</div>
        <div class="answer-child">
            <div>
                <label for="">
                    <input type="radio" name="answer" onclick="nextBtnEnable()" value="1">
                    <span id="answer1">${topic[quesAns].option1} </span>
                </label>
            </div>

            <div>
                <input type="radio" name="answer" onclick="nextBtnEnable()" value="2">
                <label for="">
                    <span id="answer2">${topic[quesAns].option2}</span>
                </label>
            </div>

            <div>
                <label for="">
                    <input type="radio" name="answer" onclick="nextBtnEnable('correctAnswer')" value="3">
                    <span id="answer3">${topic[quesAns].option3}</span>
                </label>
            </div>
            <div class="quiz-next-btn">
                <button id="nxtBtn" disabled onclick="select()">NEXT</button>
            </div>
        </div>
    </div>
    <div id="timer" style="color:#fff;"><span id="second">0</span>:<span id="minute"> 0</span></div>
    `
        quesAns++;
        quesNum++;
    }


    // let nxtBtn = document.getElementById("nxtBtn");
    // newQuestion.innerHTML = "";
}

setInterval(function () {

    let second = document.getElementById("second");
    let minute = document.getElementById("minute");
    second.innerText = milli;
    minute.innerText = sec;
    // console.log(second)
    // console.log(minute)

    if (timer === true) {
        milli--;
        // console.log(milli)
        if (sec < 0) {
            select();
            sec = 1;
        }
        if (milli < 0) {
            milli = 59;
            sec--;
        }
    }

}, 1000)
let quizParents = document.getElementById("quiz-parent");

function nextBtnEnable() {
    nxtBtn.disabled = false;
}
function login() {
    window.location.href = "./index.html";
}
function restart() {
    window.location.href = "./quiz.html";
}