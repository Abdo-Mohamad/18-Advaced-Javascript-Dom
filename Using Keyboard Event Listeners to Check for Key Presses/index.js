// Detecting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  var buttonInnerHTML = (this.innerHTML = this.innerHTML);
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(buttonInnerHTML);
  });
}

// Detecting keyboardPress

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case w:
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    default:
      break;
  }
}
