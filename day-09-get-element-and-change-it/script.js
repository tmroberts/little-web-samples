//clickme dom element
var clickMeDiv = document.querySelector('.change-me');

clickMeDiv.textContent = 'Click to change the text!';

function toggleClass() {

  var containsClass = clickMeDiv.classList.contains('toggled');
  console.log(containsClass);

  var nameEls = document.querySelectorAll("p .animal");
      for (var i = 0; i < nameEls.length; i++) {
          nameEls[i].innerHTML = "cat";
      }




  if (containsClass === 'Change me') {





    clickMeDiv.classList.add('toggled');
  }
  else {
    clickMeDiv.classList.remove('toggled');
  }

    //clickMeDiv.classList.add('toggled');

}


clickMeDiv.addEventListener('click', toggleClass);

//toggleClass();

//console.log(clickMeDiv);
