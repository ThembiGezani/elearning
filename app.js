// code to handle the "explore courses" button
var exploreButton = document.querySelector("button");
exploreButton.addEventListener("click", function () {
  window.location.href = "courses.html";
});

//code for courses page
if (document.title === "courses") {
  //add event listners to each course cards
  var cards = document.querySelectorAll(".course-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      alert("You clicked on a course!");
    });
  });
}

// code to handle the "enroll" buttons
var enrollButtons = document.querySelectorAll(".enroll-button");
enrollButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.location.href = "signup.html";
  });
});

var enrollButton1 = document.querySelector("#enroll-course1");
enrollButton1.addEventListener("click", function () {
  window.location.href = "signup.html";
});

var enrollButton2 = document.querySelector("#enroll-course2");
enrollButton1.addEventListener("click", function () {
  window.location.href = "signup.html";
});

