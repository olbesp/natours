$(document).ready(function() {

  var menuBtn = document.querySelector('#navi-toggle');
  var menuItemsList = document.querySelectorAll('.navigation__link');
  var sectionList = document.querySelectorAll('section');

  document.querySelector('#header-btn').addEventListener('click', scroll);

  for (var i = 0; i < menuItemsList.length; i++) {
    menuItemsList[i].addEventListener('click', scroll);
  }

  function scroll(event) {
    // Close menu
    menuBtn.checked = false;
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  }


});
