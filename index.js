let slider = document.querySelector("#slider");
let scoreDisplay = document.querySelector("#scoreDisplay");
let containingDiv = document.getElementById("containingDiv");
scoreDisplay.textContent = slider.value;
updateScore();

function updateScore() {
  scoreDisplay.textContent = slider.value;
  if (scoreDisplay.textContent < 50) {
    containingDiv.style.backgroundColor = "red";
  } else {
    containingDiv.style.backgroundColor = "blue";
  }
  containingDiv.style.backgroundColor === "blue"
    ? (scoreDisplay.style.color = "red")
    : (scoreDisplay.style.color = "blue");
}

slider.addEventListener("input", updateScore);
