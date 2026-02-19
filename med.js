// Role selection
function showPatient() {
    document.getElementById("patient").classList.remove("hidden");
    document.getElementById("doctorDash").classList.add("hidden");
}

function showDoctor() {
    document.getElementById("doctorDash").classList.remove("hidden");
    document.getElementById("patient").classList.add("hidden");
    loadAppointments();
}

// Appointment Booking
function book() {
    let name = document.getElementById("pname").value;
    let doctor = document.getElementById("doctor").value;
    let time = document.getElementById("time").value;

    if (name === "" || doctor === "" || time === "") {
        alert("Fill all details");
        return;
    }

    let appointment = name + " - " + doctor + " at " + time;
    localStorage.setItem("appointment", appointment);
    alert("Appointment Booked Successfully");
}

// Doctor View
function loadAppointments() {
    let data = localStorage.getItem("appointment");
    document.getElementById("appointments").innerText =
        data ? "Today's Appointment: " + data : "No Appointments";
}

// Symptom Checker
function checkSymptom() {
    let fever = document.getElementById("fever").checked;
    let cough = document.getElementById("cough").checked;
    let pain = document.getElementById("pain").checked;

    let result = "";

    if (fever && cough) {
        result = "Possible Viral Infection. Consult Physician.";
    } else if (pain) {
        result = "Possible Heart Issue. Consult Cardiologist.";
    } else {
        result = "Symptoms are mild. Maintain healthy routine.";
    }

    document.getElementById("result").innerText = result;
}

// Health Tip
let tips = [
    "Drink plenty of water daily.",
    "Exercise at least 30 minutes a day.",
    "Eat fresh fruits and vegetables.",
    "Get enough sleep for good health."
];

document.getElementById("tip").innerText =
    tips[Math.floor(Math.random() * tips.length)];
