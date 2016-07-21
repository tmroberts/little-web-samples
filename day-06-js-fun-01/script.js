console.log('loaded !');
var sum = 2 + 2;

console.log(sum);

var para = window.document.querySelector('p');

console.log(para);


para.textContent = 'Hello class ! !';


var listItems = document.querySelectorAll('li');
console.log('Here are the list items-', listItems);

var first = listItems[0];
console.log('This is the first element: ', first);


var second = listItems[1];
console.log('This is the second element: ', second);

second.textContent= 'I changed this';
console.log('This is the new second element:', listItems[1]);
