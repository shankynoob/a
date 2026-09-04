const questions = [

    {
        question: "Who is the captain of the Straw Hat Pirates?",
        answers: [
            "Roronoa Zoro",
            "Monkey D. Luffy",
            "Sanji",
            "Trafalgar Law"
        ],
        correct: "Monkey D. Luffy"
    },

    {
        question: "What is the name of Ichigo's Zanpakuto?",
        answers: [
            "Zangetsu",
            "Senbonzakura",
            "Ryujin Jakka",
            "Hyorinmaru"
        ],
        correct: "Zangetsu"
    },

    {
        question: "Which village is Naruto Uzumaki from?",
        answers: [
            "Sunagakure",
            "Kirigakure",
            "Konohagakure",
            "Iwagakure"
        ],
        correct: "Konohagakure"
    },

    {
        question: "What is the name of the protagonist of Jujutsu Kaisen?",
        answers: [
            "Megumi Fushiguro",
            "Yuji Itadori",
            "Yuta Okkotsu",
            "Satoru Gojo"
        ],
        correct: "Yuji Itadori"
    },

    {
        question: "Who is the main protagonist of Black Clover?",
        answers: [
            "Yuno",
            "Noelle Silva",
            "Asta",
            "Yami Sukehiro"
        ],
        correct: "Asta"
    },

    {
        question: "What is Tanjiro Kamado's sister's name?",
        answers: [
            "Shinobu",
            "Mitsuri",
            "Kanao",
            "Nezuko"
        ],
        correct: "Nezuko"
    },

    {
        question: "Which anime features the Titans?",
        answers: [
            "Demon Slayer",
            "Attack on Titan",
            "Bleach",
            "Hunter x Hunter"
        ],
        correct: "Attack on Titan"
    },

    {
        question: "What is Gon Freecss searching for?",
        answers: [
            "His father",
            "A legendary sword",
            "The One Piece",
            "His lost brother"
        ],
        correct: "His father"
    },

    {
        question: "Who uses the Sharingan?",
        answers: [
            "Rock Lee",
            "Sasuke Uchiha",
            "Might Guy",
            "Shikamaru Nara"
        ],
        correct: "Sasuke Uchiha"
    },

    {
        question: "What is the name of the legendary treasure in One Piece?",
        answers: [
            "All Blue",
            "Rumble Ball",
            "One Piece",
            "Red Line"
        ],
        correct: "One Piece"
    }

];


let currentQuestion = 0;
let score = 0;
let selected = false;


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-button");

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progress =
    document.getElementById("progress");

const quizBox =
    document.getElementById("quiz-box");

const resultBox =
    document.getElementById("result-box");

const finalScore =
    document.getElementById("final-score");

const resultTitle =
    document.getElementById("result-title");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");


function showQuestion() {

    selected = false;

    nextButton.disabled = true;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    scoreElement.textContent =
        `Score: ${score}`;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer;

        button.addEventListener(
            "click",
            () => selectAnswer(button, answer)
        );

        answersElement.appendChild(button);

    });

}


function selectAnswer(button, answer) {

    if (selected) return;

    selected = true;

    const correctAnswer =
        questions[currentQuestion].correct;


    const allAnswers =
        document.querySelectorAll(".answer");


    allAnswers.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }

    });


    if (answer === correctAnswer) {

        score++;

        button.classList.add("correct");

        scoreElement.textContent =
            `Score: ${score}`;

    } else {

        button.classList.add("wrong");

    }


    nextButton.disabled = false;

}


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

});


function showResults() {

    quizBox.classList.add("hidden");

    resultBox.classList.remove("hidden");

    finalScore.textContent = score;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultTitle.textContent =
            "ANIME GOD 🔥";

        resultMessage.textContent =
            "Perfect score. You actually know your anime.";

    } else if (percentage >= 80) {

        resultTitle.textContent =
            "Anime Master ⚡";

        resultMessage.textContent =
            "That's seriously impressive.";

    } else if (percentage >= 50) {

        resultTitle.textContent =
            "Not Bad 👀";

        resultMessage.textContent =
            "You've got some anime knowledge.";

    } else {

        resultTitle.textContent =
            "Bro... 💀";

        resultMessage.textContent =
            "Time to start watching some anime.";

    }

}


restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    resultBox.classList.add("hidden");

    quizBox.classList.remove("hidden");

    showQuestion();

});


showQuestion();