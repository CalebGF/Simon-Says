let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let click_lvl = 0;
let reset = 0;

let blue = new Audio("public/sounds/blue.mp3");
let green = new Audio("public/sounds/green.mp3");
let red = new Audio("public/sounds/red.mp3");
let yellow = new Audio("public/sounds/yellow.mp3");
let wrong = new Audio("public/sounds/wrong.mp3");
let buttonColours = ["red", "blue", "green", "yellow"];

function playSound(color) {
  switch (color) {
    case "red":
      red.play();
      break;
    case "blue":
      blue.play();
      break;
    case "green":
      green.play();
      break;
    case "yellow":
      yellow.play();
      break;
    default:
      break;
  }
}

function fillStats() {
    $(".level").text(level);
}

function nextSequence() {
  let number = Math.floor(Math.random() * 4) + 0;
  $("." + buttonColours[number])
    .fadeOut(100)
    .fadeIn(100);
  playSound(buttonColours[number]);
  userClickedPattern = [];
  level += 1;
  click_lvl = 0;
  gamePattern.push(buttonColours[number]);
  fillStats();
}

function checkClick(index) {
  if (gamePattern[index - 1] == userClickedPattern[index - 1]) {
    console.log("Success");
  } else {
    console.log("Wrong anwser");
  }
}

$(".btn-figure").click(function () {
  click_lvl += 1;
  color = $(this).attr("name");
  playSound(color);
  userClickedPattern.push(color);
  checkClick(click_lvl);
  if (click_lvl = level) {
    setTimeout(function(){
        nextSequence();
      },1000);
  }
});

$(".btn-start-reset").click(function () {
  if (reset == 0) {
    nextSequence();
    $(this).text("Reset");
  } /*  else {
        resetGame();
        $(this).text("Start");
    } */
});
