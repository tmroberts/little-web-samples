/*
I cannot get a solution that iterates across the array returned from querySelectorAll . . .
SOOOOO...  I'm hard-coding the variables/eventListeners for each name/circle just to finish.  bleh... ask Eric on Monday
*/
/* vars for each name to be clicked */
var bob = document.querySelector('.name_bob');
var sue = document.querySelector('.name_sue');
var fred = document.querySelector('.name_fred');
var jack = document.querySelector('.name_jack');
var dean = document.querySelector('.name_dean');

/* toggle functions */
function toggleBob() {
    bob.classList.toggle('on');
}

function toggleSue() {
    sue.classList.toggle('on');
}

function toggleFred() {
    fred.classList.toggle('on');
}

function toggleJack() {
    jack.classList.toggle('on');
}

function toggleDean() {
    dean.classList.toggle('on');
}
/* Listeners */
bob.addEventListener('click', toggleBob);
sue.addEventListener('click', toggleSue);
fred.addEventListener('click', toggleFred);
jack.addEventListener('click', toggleJack);
dean.addEventListener('click', toggleDean);
