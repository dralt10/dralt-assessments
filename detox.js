document.addEventListener("DOMContentLoaded", function () {

const app = document.getElementById("app");

const questions = [
    {
        english: "Bowel Movement",
        hindi: "मल त्याग",
        instructionEnglish: "Rate your bowel movement.",
        instructionHindi: "अपने मल त्याग को अंक दें।"
    },
    {
        english: "Tongue",
        hindi: "जीभ",
        instructionEnglish: "",
        instructionHindi: ""
    },
    {
        english: "Appetite",
        hindi: "भूख",
        instructionEnglish: "",
        instructionHindi: ""
    }
];

const totalQuestions = questions.length;
    let answers = [];

const beginButton = document.getElementById("beginButton");

    beginButton.addEventListener("click", showPatientForm);

    function showPatientForm() {

        app.innerHTML = `

        <div class="screen-header">

    <div class="logo-area">
        <!-- DRALT Logo -->
    </div>

    <h1>DRALT Detox Health Score</h1>

    <h2>ड्राल्ट डिटॉक्स हेल्थ स्कोर</h2>

</div>

<div class="form-card">

    <h3>Let's Get Started</h3>

    <p class="welcome">
        Please enter your details to begin the assessment.
    </p>

    <label>Full Name</label>
    <input type="text" id="name">

    <label>WhatsApp / Mobile Number</label>
    <input type="tel" id="mobile">

    <label>Age</label>
    <input type="number" id="age">

    <label>Gender</label>
    <select id="gender">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
    </select>

    <label>Assessment Date</label>

<div class="info-box">

    <div id="assessmentDate"></div>

    <small>✓ Auto Recorded</small>

</div>
    <button id="continueButton">
        Continue →
    </button>

    </div>
        `;
        document
    .getElementById("continueButton")
    .addEventListener("click", showQuestion1);
        const today = new Date();

const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("assessmentDate").textContent =
    today.toLocaleDateString("en-GB", options);
   document
    .getElementById("continueButton")
    .addEventListener("click", function () {
        showQuestion(1);
    });

    }
    function showQuestion(questionNumber) {

   app.innerHTML = `

    <h2>Question ${questionNumber} of ${totalQuestions}</h2>
    <h3>${questions[questionNumber - 1].english}</h3>

<h4>${questions[questionNumber - 1].hindi}</h4>
<p>${questions[questionNumber - 1].instructionEnglish}</p>

<p>${questions[questionNumber - 1].instructionHindi}</p>

<div class="score-labels">
    <span>Poor</span>
    <span>Excellent</span>
</div>

<div class="score-buttons">

    ${Array.from({ length: 10 }, (_, i) => `
        <button data-score="${i + 1}">${i + 1}</button>
    `).join("")}

</div>

`;
}

});
