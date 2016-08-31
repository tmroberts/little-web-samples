'use strict';

if (window.DataManipulator === undefined) window.DataManipulator = {};

  (function(DM) {


  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(a,b){
      var result = '';
      //console.log('In max');

      if (a > b) {
        result = a;
      }
      else {
        result = b;
      }
      //console.log('Result is: ', result);
      return result;
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3) {
        var result = '';
        //console.log('In maxOfThree');
        var result = Math.max(num1, num2, num3);
        //console.log('Result is: ', result);
        return result;
  }

  // ---------------------
  // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(char) {
    var result = '';
    //console.log('The Vowel is :', char);

    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
      result = true;
    }
    else
    {
      result = false;
    }
    //console.log('Result is: ', result);
    return result;

  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(phrase){
      //...
  }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sumFunction(numbers){
    var sum = 0;
    //console.log('In sumFunction ');
    for (var i = 0; i < numbers.length; i++) {
      //console.log('numbers is :', numbers);
      //console.log('length is :', numbers.length);
      sum += numbers[i];
      //console.log('sum is :', sum);
    }
    return sum;
  }

  function multiplyFunction(numbers){
    var sum = 1;
    //console.log('In multiplyFunction ');
    for (var i = 0; i < numbers.length; i++) {
      //console.log('Mult numbers is :', numbers);
      //console.log('Mult length is :', numbers.length);
      sum = sum * numbers[i];
      //console.log('Mult total is :', sum);
    }
    return sum;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(){
      //...
  }

  // ---------------------
  // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(words){
    var result = '';
    var longestWord = '';
    //console.log('In findLongestWord');

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > result) {
          result = words[i].length;
          longestWord = words[i];
        }
    }

    //console.log(result);
    //console.log('The longest word was: ', longestWord);
    return result;
  }

  // ---------------------
  // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(words, n) {
      //...
      var result = [];
      //console.log('In filterLongWords');

      for (var i = 0; i < words.length; i++) {
        if (words[i].length > n) {
          //console.log('words[i].length is: ', words[i].length, words[i]);
          //push
          result[result.length] = words[i];
        }
        else {
            //console.log('FAIL result is: ', words[i] + '  '+ 'Length is:', words[i].length);
        }
      }

      //console.log('result is: ', result);
      return result;
  }

  // ---------------------
  // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(string){
    console.log('In charFreq');
    var result = {};
    var len = string.length
    var currChar = '';
    // var result_a = '';
    // var result_b = '';
    // var result_c = '';
    // var result_d = '';
    for (var i = 0; i < len; i++) {
      //console.log('string.length is: ', string[i].length, string[i]);
      console.log('This is position: ',i + ' ' + 'of 27 total');
      currChar = string.charAt(i);
      console.log('This is character: ', currChar);
      if (currChar in result) {
        result[currChar] += 1;
      } else {
        result[currChar] = 1;
      }
      console.log('This is the total for character: ',currChar + '  ' +  result[currChar])
    }
    console.log('This is result: ', result);
    return result;
  }

  DM.sum = sumFunction;
  DM.multiply = multiplyFunction;
  DM.vowel = isVowel;
  DM.largest = max;
  DM.largestOfThree = maxOfThree;
  DM.findLongest = findLongestWord;
  DM.newWords = filterLongWords;
  DM.charFreq = charFreq;


})(window.DataManipulator);
