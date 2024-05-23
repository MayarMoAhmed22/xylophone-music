for (let i = 0; i < document.querySelectorAll(".alpa").length; i++) {
  document.querySelectorAll(".alpa")[i].addEventListener("click", function () {
    let alpha = this.innerHTML;
    console.log(alpha);
    currentAlpa(alpha);
    animationCurrentKey(alpha);
  });
}
document.addEventListener("keydown", function (event) {
  currentAlpa(event.key);
  animationCurrentKey(event.key);
});
function currentAlpa(key) {
  switch (key) {
    case "c":
      var audio = new Audio("./sounds/c.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("./sounds/b.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/a.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/d.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("./sounds/e.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("./sounds/f.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("./sounds/g.mp3");
      audio.play();
      break;
    default:
      console.log("Unknown key: " + key);
  }
}
function animationCurrentKey(currentkey) {
  let acticurrentkey = document.querySelector("." + currentkey);
  acticurrentkey.classList.add("pressed");
  setTimeout(function () {
    acticurrentkey.classList.remove("pressed");
  }, 100);
}
