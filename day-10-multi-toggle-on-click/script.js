var bob = document.querySelector('.name_bob');

function onClass() {
  var containsClass = bob.classList.contains('on');
  if (containsClass === false) {
    bob.classList.add('on');
  }
  else {
    bob.classList.remove('on');
  }
}
      
bob.addEventListener('click', onClass);
