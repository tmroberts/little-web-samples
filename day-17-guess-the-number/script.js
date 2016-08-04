var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');
var inputValue = '';
var randomNumber = Math.ceil(Math.random() * 50);
var tries = 0;
var used = document.querySelector('.used');
var numbersUsed = [];

function guessFunc() {
    input.focus();
    inputValue = input.value;

    if (isNaN(inputValue)) {
      output.textContent = 'hey dufus... Enter a number. This is a number game';
      return;
    }

    if (inputValue == '') {
      output.textContent = 'You did not enter anything. This is a number game';
      return;
    }

    if (inputValue > 50 || inputValue < 1) {
      output.textContent = 'Follow directions. . .  Enter a number between 1 and 50';
      return;
    }

    if(inputValue < randomNumber) {
      output.textContent = "higher";
    }
    else if(inputValue > randomNumber) {
      output.textContent = "lower";
    }
    else {
      output.textContent = "You win!";
      return;
    };

    numbersUsed.push(inputValue);
    used.textContent = numbersUsed;
    /* input.value = ''; */

    tries +=1;
    if (tries == 5) {
      output.textContent = "You have run out of guesses!  " + "The Number was: " + randomNumber;
      /* window.location.reload() */
      return;
    };
};

button.addEventListener('click', guessFunc);
