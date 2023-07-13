(function () {
    "use strict";
  
    // define variables
    // Select all elements in the DOM with class ".timeline li"
    var items = document.querySelectorAll(".timeline li");
  

    function isElementInViewport(el) {
      // Gets the position of the element relative to the viewport
      var rect = el.getBoundingClientRect();
      // Checks if the element is in the viewport
      return (
        rect.top >= 0 &&  // Element is not above the viewport
        rect.left >= 0 && // Element is not to the left of the viewport
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    // Function to be called when the page loads, resizes, and scrolls
    function callbackFunc() {
      // Loops through all the items
      for (var i = 0; i < items.length; i++) {
         // If the item is in the viewport
        if (isElementInViewport(items[i])) {
          // Adds the "in-view" class to the item
          items[i].classList.add("in-view");
        }
      }
    }
  
  // When the page loads, call callbackFunc
  window.addEventListener("load", callbackFunc);
  // When the window is resized, call callbackFunc
  window.addEventListener("resize", callbackFunc);
  // When the window is scrolled, call callbackFunc
  window.addEventListener("scroll", callbackFunc);
  })();
  
  