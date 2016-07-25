
var theList = document.querySelector('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

//Add code here!
for (var i = 0; i < groceryList.length; i++) {
  var restaurant = groceryList[i];
  //console.log(i, restaurant);

  var li = document.createElement('li');
  li.textContent = restaurant;
  theList.appendChild(li);
}
