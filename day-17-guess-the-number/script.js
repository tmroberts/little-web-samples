var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');
var inputValue = '';
var randomNumber = Math.ceil(Math.random() * 50);
var tries = 0;

var used = document.querySelector('.used');
var numbersUsed = [];

function guessFunc() {
    inputValue = input.value;

    if (isNaN(inputValue)) {
      output.textContent = 'hey dufus... Enter a number. This is a number game';
      return;
    }

    if (inputValue == '') {
      output.textContent = 'You did not enter anything. This is a number game';
      return;
    }

    if (inputValue > 50 ) {
      output.textContent = 'Follow directions. . .  Enter a number less than 50';
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
    };

    numbersUsed.push(inputValue);
    used.textContent = numbersUsed;

    tries +=1;
    if (tries == 5) {
      output.textContent = "You have run out of guesses!";
      return;
    };
};

button.addEventListener('click', guessFunc);
