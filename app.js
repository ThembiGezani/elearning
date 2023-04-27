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
