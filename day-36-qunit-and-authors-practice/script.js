'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

  var authors = [
    { name: 'Andrew Murray', language: 'English', publishedWorks: 240 },
    { name: 'Muhammad Muhiyyudin Ibn ul Arabi', language: 'Arabic', publishedWorks: 240 },
    { name: 'Jallaludin Suyuti', language: 'Arabic', publishedWorks: 700 },
    { name: 'Abu Hamid Al Ghazali', language: 'Arabic', publishedWorks: 200 },
    { name: 'Isaac Asimov', language: 'English', publishedWorks: 506 },
    { name: 'Jacob M. Appel', language: 'English', publishedWorks: 200 },
    { name: 'Meish Goldish', language: 'English', publishedWorks: 300 },
    { name: 'Kyokutei Bakin', language: 'Japanese', publishedWorks: 470 },
    { name: 'Ursula Bloom', language: 'English', publishedWorks: 500 },
    { name: 'Enid Blyton', language: 'English', publishedWorks: 600 },
    { name: 'Barbara Cartland', language: 'English', publishedWorks: 722 },
    { name: 'Darya Dontsova', language: 'Russian', publishedWorks: 140 },
    { name: 'Alexandre Dumas', language: 'French', publishedWorks: 277 },
    { name: 'Jacob Neusner', language: 'English', publishedWorks: 950 },
    { name: 'Georges Simenon', language: 'French', publishedWorks: 500 }
  ];

  function arabicAuthorsCount() {
    //console.log('In arabicAuthorsCount');
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.language === 'Arabic') {
        filteredAuthors.push(author);
      }
    }
    //console.log('This is the total for Arabic authors: ',filteredAuthors.length + '  ' +  filteredAuthors.language)
    return filteredAuthors.length;
  }

  context.arabicAuthorsCount = arabicAuthorsCount;

/////////////

  function englishAuthorsCount() {
    //console.log('In englishAuthorsCount');
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.language === 'English') {
        filteredAuthors.push(author);
      }
    }
    //console.log('This is the total for English authors: ',filteredAuthors.length + '  ' +  filteredAuthors.language)
    return filteredAuthors.length;
  }

  context.englishAuthorsCount = englishAuthorsCount;


/////////////

function russianAuthorsCount() {
  //console.log('In russianAuthorsCount');
  var filteredAuthors = [];

  for (var author of authors) {
    if (author.language === 'Russian') {
      filteredAuthors.push(author);
    }
  }
  //console.log('This is the total for Russian authors: ',filteredAuthors.length + '  ' +  filteredAuthors.language)
  return filteredAuthors.length;
}

context.russianAuthorsCount = russianAuthorsCount;

////////////
function publishedWorksCount() {
  //console.log('In publishedWorks');
  var filteredAuthors = [];

  for (var author of authors) {
    if (author.publishedWorks > 500) {
      filteredAuthors.push(author);
    }
  }
  //console.log('This is the total for authors with > 500 publishedWorks: ',filteredAuthors.length + '  ' +  filteredAuthors.language)
  return filteredAuthors.length;
}

context.publishedWorksCount = publishedWorksCount;


///////////

function mostPublishedWorksCount() {
  //console.log('In publishedWorks');
  var filteredAuthors = [];
  var authorName;
  var workCount = 0;

  for (var author of authors) {
   if (author.publishedWorks > workCount){
     //console.log('This is workCount: ', workCount);
     //console.log('This is author.publishedWorks: ', author.publishedWorks);
     workCount = author.publishedWorks;
     authorName = author.name;
     //console.log('This is workCount: ', workCount);
     //console.log('This is authorName: ', authorName);
    }
  }
  //console.log('This is the total for authors with = 950 publishedWorks: ',filteredAuthors.publishedWorks + '  ' +  filteredAuthors.publishedWorks)
  return workCount;
}

 context.mostPublishedWorksCount = mostPublishedWorksCount;

//////////

function nameBeginsA() {
 //console.log('In nameBeginsA');
 var filteredAuthors = [];
  for (var author of authors) {
    if (author.name.charAt(0) === 'A') {
      //console.log('This is filteredAuthors: ', filteredAuthors);
      filteredAuthors.push(author.name);
    }
  }
  //console.log('This is the count of filteredAuthors: ', filteredAuthors.length);
   return filteredAuthors.length;
}

  context.nameBeginsA = nameBeginsA;

//////////

function nameBeginsK() {
  //console.log('In nameBeginsK');
  var filteredAuthors = [];
  for (var author of authors) {
    if (author.name.charAt(0) === 'K') {
      //console.log('This is filteredAuthors: ', filteredAuthors);
      filteredAuthors.push(author.name);
    }
  }
    //console.log('This is the count of filteredAuthors: ', filteredAuthors.length);
    return filteredAuthors.length;
}
    context.nameBeginsK = nameBeginsK;

//////////


function avgPublishedWorksCount() {
  //var numbers = [240,240,700,200,506,200,300,470,500,600,722,140,277,950,500];
  var publishedCount = 0;
  var publishedTotal = 0;
  var avg = 0;
  //console.log('In avgPublishedWorksCount ');
  var filteredAuthors = [];
  for (var author of authors) {
    publishedCount += 1;
    publishedTotal = publishedTotal += author.publishedWorks;
    //console.log('This is count:', count);
    //console.log('This is total:', total);
  }
  avg = (publishedTotal / publishedCount);
  //console.log('This is avg:', avg);
  avg = Math.floor(avg);
  //console.log('This is rounded avg:', avg);
  return avg;
}
//
 context.avgPublishedWorksCount = avgPublishedWorksCount;


//////////

function avgPublishedWorksCountEnglish() {
  //var numbers = [240,506,200,300,500,600,722,950];
  var publishedCount = 0;
  var publishedTotal = 0;
  var avg = 0;
  //console.log('In avgPublishedWorksCountEnglish');
  var filteredAuthors = [];
  for (var author of authors) {
    if (author.language === 'English') {
      publishedCount += 1;
      publishedTotal = publishedTotal += author.publishedWorks;
      //console.log('This is count:', publishedCount);
      //console.log('This is total:', publishedTotal);
    }
  }
  avg = (publishedTotal / publishedCount);
  //console.log('This is avg:', avg);
  avg = Math.floor(avg);
  //console.log('This is rounded avg:', avg);
  return avg;
}
  context.avgPublishedWorksCountEnglish = avgPublishedWorksCountEnglish;

/////////

function avgPublishedWorksCountJapenese() {
  //var numbers = [470];
  var publishedCount = 0;
  var publishedTotal = 0;
  var avg = 0;
  console.log('In avgPublishedWorksCountEnglish');
  var filteredAuthors = [];
  for (var author of authors) {
    if (author.language === 'Japanese') {
      publishedCount += 1;
      publishedTotal = publishedTotal += author.publishedWorks;
      console.log('This is count:', publishedCount);
      console.log('This is total:', publishedTotal);
    }
  }
  avg = (publishedTotal / publishedCount);
  console.log('This is avg:', avg);
  avg = Math.floor(avg);
  console.log('This is rounded avg:', avg);
  return avg;
}
 context.avgPublishedWorksCountJapanese = avgPublishedWorksCountJapenese;

//////////

})(window.QUnitPractice);
