// Dynamic menu by scroll

(function(window, document) {
  var fixedMenu = document.getElementById('menu');
  var prevScrollTop = 0;
  var translateY = 0;
  var maxTranslateY = fixedMenu.offsetHeight;
  var isScrolled = false;

  window.onscroll = function() {
    if (prevScrollTop > document.body.scrollTop) {
      translateY += prevScrollTop - document.body.scrollTop;
    } else if (prevScrollTop < document.body.scrollTop) {
      translateY -= document.body.scrollTop - prevScrollTop;
    }

    if (translateY >= maxTranslateY) {
      translateY = maxTranslateY;
    } else if (translateY < 0) {
      translateY = 0;
    }

    prevScrollTop = document.body.scrollTop;

    fixedMenu.style.transform = 'translateY(' + (translateY - maxTranslateY) + 'px)';
  };

})(window, document);
