document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");

    const beginButton = document.getElementById("beginButton");

    beginButton.addEventListener("click", showPatientForm);

    function showPatientForm() {

        app.innerHTML = `

        <h1>Let's Get Started</h1>
        
        <h2>चलिए शुरू करें</h2>
        
        <p class="welcome">
        Please enter your details to begin the assessment.
        </p>
        
        <p class="welcome-hi">
        अपनी जानकारी भरकर असेसमेंट शुरू करें।
        </p>

        <input type="text" id="name" placeholder="Full Name">

        <input type="tel" id="mobile" placeholder="WhatsApp / Mobile Number">

        <input type="number" id="age" placeholder="Age">

        <select id="gender">

            <option value="">Select Gender</option>

            <option>Male</option>

            <option>Female</option>

            <option>Other</option>

        </select>

        <button id="continueButton">
        Continue
        </button>

        `;

    }

});
