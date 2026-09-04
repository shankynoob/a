// ==========================================
// ANIME QUIZ - RANDOMIZED VERSION
// ==========================================

const questionBank = [

    // =====================
    // EASY
    // =====================

    {
        difficulty: "Easy",
        question: "Who is the captain of the Straw Hat Pirates?",
        answers: [
            "Monkey D. Luffy",
            "Roronoa Zoro",
            "Sanji",
            "Trafalgar Law"
        ],
        correct: "Monkey D. Luffy"
    },

    {
        difficulty: "Easy",
        question: "What is Naruto Uzumaki's village?",
        answers: [
            "Konohagakure",
            "Sunagakure",
            "Kirigakure",
            "Iwagakure"
        ],
        correct: "Konohagakure"
    },

    {
        difficulty: "Easy",
        question: "What is Tanjiro's sister's name?",
        answers: [
            "Nezuko",
            "Shinobu",
            "Kanao",
            "Mitsuri"
        ],
        correct: "Nezuko"
    },

    {
        difficulty: "Easy",
        question: "Who is the main character of Black Clover?",
        answers: [
            "Asta",
            "Yuno",
            "Yami",
            "Luck"
        ],
        correct: "Asta"
    },

    {
        difficulty: "Easy",
        question: "Who is the protagonist of Jujutsu Kaisen?",
        answers: [
            "Yuji Itadori",
            "Megumi Fushiguro",
            "Satoru Gojo",
            "Yuta Okkotsu"
        ],
        correct: "Yuji Itadori"
    },

    {
        difficulty: "Easy",
        question: "Which anime features Titans?",
        answers: [
            "Attack on Titan",
            "Demon Slayer",
            "Bleach",
            "One Piece"
        ],
        correct: "Attack on Titan"
    },

    {
        difficulty: "Easy",
        question: "Who uses the Sharingan?",
        answers: [
            "Sasuke Uchiha",
            "Rock Lee",
            "Shikamaru Nara",
            "Might Guy"
        ],
        correct: "Sasuke Uchiha"
    },

    {
        difficulty: "Easy",
        question: "What is Ichigo's Zanpakuto called?",
        answers: [
            "Zangetsu",
            "Hyorinmaru",
            "Senbonzakura",
            "Ryujin Jakka"
        ],
        correct: "Zangetsu"
    },

    {
        difficulty: "Easy",
        question: "What is the legendary treasure in One Piece called?",
        answers: [
            "One Piece",
            "All Blue",
            "Red Line",
            "Rumble Ball"
        ],
        correct: "One Piece"
    },

    {
        difficulty: "Easy",
        question: "Who is Gon Freecss searching for?",
        answers: [
            "His father",
            "His brother",
            "His teacher",
            "His grandfather"
        ],
        correct: "His father"
    },


    // =====================
    // MEDIUM
    // =====================

    {
        difficulty: "Medium",
        question: "What is Luffy's Devil Fruit called?",
        answers: [
            "Gomu Gomu no Mi",
            "Mera Mera no Mi",
            "Ope Ope no Mi",
            "Gura Gura no Mi"
        ],
        correct: "Gomu Gomu no Mi"
    },

    {
        difficulty: "Medium",
        question: "Who was the first Hokage?",
        answers: [
            "Hashirama Senju",
            "Tobirama Senju",
            "Hiruzen Sarutobi",
            "Minato Namikaze"
        ],
        correct: "Hashirama Senju"
    },

    {
        difficulty: "Medium",
        question: "What is the name of Gojo's Domain Expansion?",
        answers: [
            "Unlimited Void",
            "Malevolent Shrine",
            "Chimera Shadow Garden",
            "Self-Embodiment of Perfection"
        ],
        correct: "Unlimited Void"
    },

    {
        difficulty: "Medium",
        question: "Who is the captain of the Black Bulls?",
        answers: [
            "Yami Sukehiro",
            "Fuegoleon Vermillion",
            "William Vangeance",
            "Nozel Silva"
        ],
        correct: "Yami Sukehiro"
    },

    {
        difficulty: "Medium",
        question: "What breathing style does Zenitsu primarily use?",
        answers: [
            "Thunder Breathing",
            "Water Breathing",
            "Flame Breathing",
            "Wind Breathing"
        ],
        correct: "Thunder Breathing"
    },

    {
        difficulty: "Medium",
        question: "Who is the leader of the Akatsuki for much of Naruto Shippuden?",
        answers: [
            "Pain",
            "Itachi",
            "Kisame",
            "Deidara"
        ],
        correct: "Pain"
    },

    {
        difficulty: "Medium",
        question: "What is the name of Ichigo's Bankai?",
        answers: [
            "Tensa Zangetsu",
            "Senbonzakura Kageyoshi",
            "Daiguren Hyorinmaru",
            "Katen Kyokotsu"
        ],
        correct: "Tensa Zangetsu"
    },

    {
        difficulty: "Medium",
        question: "Who is known as the Strongest Swordsman in One Piece?",
        answers: [
            "Dracule Mihawk",
            "Roronoa Zoro",
            "Shanks",
            "Vista"
        ],
        correct: "Dracule Mihawk"
    },

    {
        difficulty: "Medium",
        question: "What is Eren Yeager's Titan known as?",
        answers: [
            "Attack Titan",
            "Armored Titan",
            "Beast Titan",
            "Colossal Titan"
        ],
        correct: "Attack Titan"
    },

    {
        difficulty: "Medium",
        question: "What is the name of the Soul Reaper organization in Bleach?",
        answers: [
            "Gotei 13",
            "Akatsuki",
            "Black Bulls",
            "Phantom Troupe"
        ],
        correct: "Gotei 13"
    },


    // =====================
    // HARD
    // =====================

    {
        difficulty: "Hard",
        question: "What is the name of Yuno's four-leaf grimoire spirit?",
        answers: [
            "Sylph",
            "Salamander",
            "Undine",
            "Gnome"
        ],
        correct: "Sylph"
    },

    {
        difficulty: "Hard",
        question: "What is the name of Trafalgar Law's Devil Fruit?",
        answers: [
            "Ope Ope no Mi",
            "Bari Bari no Mi",
            "Nikyu Nikyu no Mi",
            "Ito Ito no Mi"
        ],
        correct: "Ope Ope no Mi"
    },

    {
        difficulty: "Hard",
        question: "Who founded the Phantom Troupe?",
        answers: [
            "Chrollo Lucilfer",
            "Hisoka",
            "Feitan",
            "Illumi"
        ],
        correct: "Chrollo Lucilfer"
    },

    {
        difficulty: "Hard",
        question: "What is the name of the first Quincy Ichigo encounters?",
        answers: [
            "Uryu Ishida",
            "Jugram Haschwalth",
            "Quilge Opie",
            "Askin Nakk Le Vaar"
        ],
        correct: "Uryu Ishida"
    },

    {
        difficulty: "Hard",
        question: "Which Hashira uses Love Breathing?",
        answers: [
            "Mitsuri Kanroji",
            "Shinobu Kocho",
            "Kanae Kocho",
            "Kanao Tsuyuri"
        ],
        correct: "Mitsuri Kanroji"
    },

    {
        difficulty: "Hard",
        question: "What is the name of Sukuna's Domain Expansion?",
        answers: [
            "Malevolent Shrine",
            "Unlimited Void",
            "Coffin of the Iron Mountain",
            "Horizon of the Captivating Skandha"
        ],
        correct: "Malevolent Shrine"
    },

    {
        difficulty: "Hard",
        question: "Who was the previous owner of the Nine-Tails before Naruto?",
        answers: [
            "Kushina Uzumaki",
            "Mito Uzumaki",
            "Tsunade",
            "Mei Terumi"
        ],
        correct: "Kushina Uzumaki"
    },

    {
        difficulty: "Hard",
        question: "What is the name of the giant elephant that carries Zou?",
        answers: [
            "Zunesha",
            "Laboon",
            "Surume",
            "Sea King"
        ],
        correct: "Zunesha"
    },

    {
        difficulty: "Hard",
        question: "What is the name of Asta's anti-magic sword?",
        answers: [
            "Demon-Slayer Sword",
            "Demon-Dweller Sword",
            "Demon-Destroyer Sword",
            "Excalibur"
        ],
        correct: "Demon-Slayer Sword"
    },

    {
        difficulty: "Hard",
        question: "Who created the Death Note?",
        answers: [
            "The Shinigami King",
            "Ryuk",
            "Rem",
            "Light Yagami"
        ],
        correct: "The Shinigami King"
    }

];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selected = false;


// ==========================================
// HTML ELEMENTS
// ==========================================

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


// ==========================================
// SHUFFLE
// ==========================================

function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ==========================================
// CREATE RANDOM QUIZ
// ==========================================

function createQuiz() {

    // Try to get a mix of difficulties

    const easy =
        questionBank.filter(q => q.difficulty === "Easy");

    const medium =
        questionBank.filter(q => q.difficulty === "Medium");

    const hard =
        questionBank.filter(q => q.difficulty === "Hard");


    // 4 easy + 3 medium + 3 hard

    quizQuestions = [
        ...shuffle(easy).slice(0, 4),
        ...shuffle(medium).slice(0, 3),
        ...shuffle(hard).slice(0, 3)
    ];


    // Randomize the order of those 10 questions

    quizQuestions = shuffle(quizQuestions);
}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    selected = false;

    nextButton.disabled = true;

    const question =
        quizQuestions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;


    scoreElement.textContent =
        `Score: ${score}`;


    progress.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


    answersElement.innerHTML = "";


    // RANDOMIZE ANSWERS

    const shuffledAnswers =
        shuffle(question.answers);


    shuffledAnswers.forEach(answer => {

        const button =
            document.createElement("button");


        button.classList.add("answer");


        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => selectAnswer(button, answer)
        );


        answersElement.appendChild(button);

    });


    // Add difficulty label

    const existingDifficulty =
        document.querySelector(".difficulty-label");

    if (existingDifficulty) {
        existingDifficulty.remove();
    }


    const difficulty =
        document.createElement("div");

    difficulty.classList.add("difficulty-label");

    difficulty.textContent =
        `${question.difficulty} Difficulty`;


    difficulty.style.marginBottom = "15px";
    difficulty.style.fontWeight = "bold";
    difficulty.style.color =
        question.difficulty === "Easy"
            ? "#00c878"
            : question.difficulty === "Medium"
                ? "#ffc107"
                : "#ff1744";


    questionElement.before(difficulty);

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(button, answer) {

    if (selected) return;

    selected = true;


    const correctAnswer =
        quizQuestions[currentQuestion].correct;


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


// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < quizQuestions.length) {

        showQuestion();

    } else {

        showResults();

    }

});


// ==========================================
// RESULTS
// ==========================================

function showResults() {

    quizBox.classList.add("hidden");

    resultBox.classList.remove("hidden");


    finalScore.textContent =
        score;


    const percentage =
        (score / quizQuestions.length) * 100;


    if (percentage === 100) {

        resultTitle.textContent =
            "ANIME GOD 🔥";

        resultMessage.textContent =
            "10/10. Bro knows EVERYTHING.";

    }

    else if (percentage >= 80) {

        resultTitle.textContent =
            "ANIME MASTER ⚡";

        resultMessage.textContent =
            "Your anime knowledge is actually insane.";

    }

    else if (percentage >= 60) {

        resultTitle.textContent =
            "SOLID W 👀";

        resultMessage.textContent =
            "Pretty good. You've definitely watched some anime.";

    }

    else if (percentage >= 40) {

        resultTitle.textContent =
            "NOT BAD 😭";

        resultMessage.textContent =
            "You know the basics. Time to level up.";

    }

    else {

        resultTitle.textContent =
            "BRO 💀";

        resultMessage.textContent =
            "You might need to watch a few more anime.";

    }

}


// ==========================================
// RESTART
// ==========================================

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;


    createQuiz();


    resultBox.classList.add("hidden");

    quizBox.classList.remove("hidden");


    showQuestion();

});


// ==========================================
// START QUIZ
// ==========================================

createQuiz();

showQuestion();
