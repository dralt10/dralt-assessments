document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");

    const beginButton = document.getElementById("beginButton");

    beginButton.addEventListener("click", showPatientForm);

    function showPatientForm() {

        app.innerHTML = `

        <h1>Patient Details</h1>

        <h2>रोगी की जानकारी</h2>

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
