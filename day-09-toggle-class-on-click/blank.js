var clickMeDiv = document.querySelector('.click-me');

clickMeDiv.textContent = 'Click me now!';

function onClass() {

  var containsClass = clickMeDiv.classList.contains('on');

  if (containsClass === false) {
    clickMeDiv.classList.add('on');
  }
  else {
    clickMeDiv.classList.remove('on');
  }

}

clickMeDiv.addEventListener('click', onClass);
