var input = document.querySelector("#text-entry");
var button = document.querySelector("#entry-button");
/*var target = document.querySelector('.target');*/
var theList = document.querySelector('#the-list');

/* reset focus back to input */
input.focus();

function createListItem () {
  /*console.log('This is var input b4: ', value);
  console.log('This is var button b4: ', value);
  console.log('This is var target b4: ', value);*/
  var value = input.value;

  /*console.log('This is var input AFTER: ', value);
  console.log('This is var button AFTER: ', value);
  console.log('This is var target AFTER', value);*/
  if (value !== '') {
    var li = document.createElement('li');
    li.textContent = value;
    theList.appendChild(li);

  }

    /* initialize the input */
    input.value = '';

    /* reset focus back to input */
    input.focus();

}

button.addEventListener('click', createListItem);
