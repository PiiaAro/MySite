// WHEN BUTTON IS CLICKED, THE FUNCTION HANDLECLICK IS CALLED
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("Hello, world!");
// }

// document.querySelector("button").addEventListener("click", function () {
//   alert("Hello, world!");
// });

// DETECTING BUTTON PRESS
// select all buttons and store them in a NodeList
const buttons = document.querySelectorAll(".drum");

// loop through each button and attach a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// IN CONSTRUCTION FUNCTION THE NAME HAS TO BE CAPITALIZED
// function HouseKeeper(name, age, yearsOfExperience, cleaningRepertoire) {
//   this.name = name;
//   this.age = age;
//   this.yearsOfExperience = yearsOfExperience;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function () {
//     alert("Cleaning in progress...");
//   };
// }
// const tyyppi = new HouseKeeper("Tyyppi", 30, 10, ["bathroom", "kitchen"]);
// console.log(tyyppi);

// function to check which key is pressed
