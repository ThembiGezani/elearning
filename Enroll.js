// Get references to all the enroll buttons
const course1Btn = document.getElementById("course1");
const course2Btn = document.getElementById("course2");
const course3Btn = document.getElementById("course3");
const course4Btn = document.getElementById("course4");
const course5Btn = document.getElementById("course5");

// Add event listeners to each button
course1Btn.addEventListener("click", function () {
  window.location.href = "Responsive-Web-Design.html";
});

course2Btn.addEventListener("click", function () {
  window.location.href = "public-Administration.html";
});

course3Btn.addEventListener("click", function () {
  window.location.href = "HRM.html";
});

course4Btn.addEventListener("click", function () {
  window.location.href = "law.html";
});

course5Btn.addEventListener("click", function () {
  window.location.href = "Data-Analysis.html";
});