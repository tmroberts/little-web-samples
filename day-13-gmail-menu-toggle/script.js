var theList = document.querySelector('#the-list');

theList.addEventListener('click', function(evt) {

  if (evt.target.tagName === 'LI') {
    var currentlySelectedLI = document.querySelector('.selected');
    if (currentlySelectedLI !== null) {
      currentlySelectedLI.classList.remove('selected');
    }

    evt.target.classList.add('selected');

  }

});
