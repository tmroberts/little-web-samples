// QUnit.test('Test a thing', function( assert ) {
//   //call code
//   assert.equal(1, 2, 'Sample test.' );
// });

QUnit.test( 'count of authors who wrote in Arabic', function( assert ) {
  var filtered = QUnitPractice.arabicAuthorsCount();
  assert.deepEqual(filtered, 3, 'Should have returned three results.' );
});

//Write tests to get these bits of data, and then write the //functions to return that data to pass the tests

//1.Count the number of English writers
QUnit.test( 'count of authors who wrote in English', function( assert ) {
  var filtered = QUnitPractice.englishAuthorsCount();
  assert.deepEqual(filtered, 8, 'Should have returned eight results.' );
});


//2.Count the number of Russian writers
QUnit.test( 'count of authors who wrote in Russian', function( assert ) {
  var filtered = QUnitPractice.russianAuthorsCount();
  assert.deepEqual(filtered, 1, 'Should have returned one result.' );
});


//3.Count the number of authors who wrote over 500 books
QUnit.test( 'count of authors with publishedWorks > 500 ', function( assert ) {
  var filtered = QUnitPractice.publishedWorksCount();
  assert.deepEqual(filtered, 5, 'Should have returned five results.' );
});

//4.The author with the most published works
//name: 'Jacob Neusner', language: 'English', publishedWorks: 950
 QUnit.test( 'count of author with MOST published works ', function( assert ) {
   var filtered = QUnitPractice.mostPublishedWorksCount();
   assert.deepEqual(filtered, 950, 'Should have returned 950 results.' );
 });


//5.Count of the authors whose name begins with the letter 'A'
QUnit.test( 'count of authors whose name begins with A', function( assert ) {
   var filtered = QUnitPractice.nameBeginsA();
   assert.deepEqual(filtered, 3, 'Should have returned three results.' );
 });

//6.Count of the authors whose name begins with the letter 'K'
QUnit.test( 'count of authors whose name begins with K', function( assert ) {
   var filtered = QUnitPractice.nameBeginsK();
   assert.deepEqual(filtered, 1, 'Should have returned three results.' );
 });


//7.Compute the average number of published works

QUnit.test( 'compute average published works',
function( assert ) {
   var filtered = QUnitPractice.avgPublishedWorksCount();
   assert.deepEqual(filtered, 436, 'Should have returned 436  results.' );
 });



//8.Compute the average number of published works by English authors
QUnit.test('Compute of average published works by English authors',
function( assert ) {
   var filtered = QUnitPractice.avgPublishedWorksCountEnglish();
   assert.deepEqual(filtered, 502, 'Should have returned 502  results.' );
});


//9.Compute the average number of published works by Japanese authors
QUnit.test( 'compute of average published works by Japanese authors',
function(assert) {
  var filtered = QUnitPractice.avgPublishedWorksCountJapanese();
  assert.deepEqual(filtered, 470, 'Should have returned 470  results.' );
});
