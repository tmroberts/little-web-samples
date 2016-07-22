var textTarget = document.querySelector(".the-paragraph");

function changeText() {
  textTarget.innerHTML = 'When clicked, I changed this text with .innerHTML. But... .textContext works too!  What is the difference?';
}

textTarget.addEventListener("click", changeText);
