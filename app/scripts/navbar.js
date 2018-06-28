// var sscrl = new SmoothScroll('a[href*="#"]');

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  scroll()
};
window.onload = function () {
  scroll();
}

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
  if (!(window.pageYOffset > sticky)) {
    navbar.classList.add("stick");
  } else {
    navbar.classList.remove("stick");
  }
}

function isElementInViewport(el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
