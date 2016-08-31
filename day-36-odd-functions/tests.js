QUnit.test('Test summming an array of numbers', function( assert ) {
  //call code
  var numbers = [1, 2, 3, 4];
  var result = DataManipulator.sum(numbers);
  assert.equal(result, 10, 'Sample test.' );
});

QUnit.test('Test multiplying an array of numbers', function( assert ) {
  //call code
  var numbers = [1, 2, 3, 4];
  var result = DataManipulator.multiply(numbers);
  assert.equal(result, 24, 'Sample test.' );
});

QUnit.test('Test input letter to see if it is a vowel', function( assert ) {
  //call code
  var letter = 'M';
  var result = DataManipulator.vowel(letter);
  assert.equal(result, false, 'Sample test.' );
});

QUnit.test('Test letter to see if it is a vowel', function( assert ) {
  //call code
  var letter = 'A';
  var result = DataManipulator.vowel(letter);
  assert.equal(result, true, 'Sample test.' );
});

QUnit.test('Test to return the largest of two integers', function( assert ) {
  //call code
  var a  = '5';
  var b  = '9';
  var result = DataManipulator.largest(a,b);
  assert.equal(result, 9, 'Sample test.' );
});


QUnit.test('Test to return the largest of three integers', function( assert ) {
  var result = DataManipulator.largestOfThree(3,5,7);
  assert.equal(result, 7, 'Sample test.' );
});


QUnit.test('Test to reverse a string', function( assert ) {
  var data = 'jag testar';
  var result = DataManipulator.reverse(data);
  assert.equal(result, 'ratset gaj', 'Sample test.' );
});


QUnit.test('Test to return the length of the largest of three words', function( assert ) {
  var largest = '';
  var words = ["dog", "cat", "horse"];
  var result = DataManipulator.findLongest(words);
  assert.equal(result, 5, 'Sample test.' );
});


QUnit.test('Test to return an array of words that are longer than than the parameter provided', function( assert ) {
  var newWords = ["Oklahoma", "Kansas", "Colorado"];
  var words = ["Texas", "Oklahoma", "Kansas", "Colorado"];
  var n = 5;
  var result = DataManipulator.newWords(words, n);
  assert.deepEqual(result, newWords, 'Sample test.' );
});


QUnit.test('Test to return a list showing how many times each character occurs in the string.', function( assert ) {
   var testString = 'abbabcbdbabdbdbabababcbcbab';
   var result = DataManipulator.charFreq(testString);
   //assert.deepEqual(result, {h:1, 2:1, p:2, y:1}, 'Sample test.' );
  //  assert.equal(result_a, 7, 'Sample test.' );
  //  assert.equal(result_b, 14, 'Sample test.' );
  //  assert.equal(result_c, 3, 'Sample test.' );
  //  assert.equal(result_d, 3, 'Sample test.' );
  assert.deepEqual(result, {a:7, b:14, c:3, d:3}, 'Sample test.' );
});
