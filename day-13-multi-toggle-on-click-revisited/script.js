/*
Using Event Delegation to toggle the circles
*/

var theList = document.querySelector('#the-list');

// Using an array of names to populate the ul placeholder with circles.  Using Event Delegation to handle the class toggle.

// Added 'Frank', 'Kathy', 'Patty', 'Terry', 'Brenda', 'Denise' to ensure this was updating dynamically.

var names = ['Bob', 'Sue', 'Fred', 'Jack', 'Dean', 'Frank', 'Kathy', 'Patty', 'Terry', 'Brenda', 'Denise'];

//Add code here.
for (var i=0; i < names.length; i++ ) {
  //console.log(names[i]);
  var li = document.createElement('li');
  li.textContent = names[i];
  theList.appendChild(li)
}

/* Listeners */
theList.addEventListener('click', function(evt){
  if (evt.target.tagName === 'LI' ) {
    evt.target.classList.toggle('on');
  }
  // console.log(evt.target);
  // console.log(evt.target.tagName);
}
);
