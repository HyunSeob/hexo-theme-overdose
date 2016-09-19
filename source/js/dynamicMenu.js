(function(window, document) {
  function addClass(target, className) {
    if (target && !target.classList.contains(className)) {
      target.classList.add(className);
    }
  }

  function removeClass(target, className) {
    if (target && target.classList.contains(className)) {
      target.classList.remove(className);
    }
  }

  var prevPos = 0, currPos = 0;
  var menu = document.getElementById('menu');
  var sharer = document.getElementById('sharer');
  var article = document.getElementById('article');
  var articleTop = article ? article.offsetTop : null;
  var articleBottom = article ? article.offsetTop + article.scrollHeight : null;

  window.addEventListener('scroll', function() {

    currPos = window.scrollY || window.pageYOffset || document.body.scrolTop || 0;

    if (currPos < 0) currPos = 0;

    if (articleTop && articleTop > currPos) {
      removeClass(menu, 'menu--hide');
      removeClass(sharer, 'sharer--hide');
    } else if (articleBottom && currPos > articleBottom) {
      removeClass(menu, 'menu--hide');
      addClass(sharer, 'sharer--hide');
    } else if (prevPos < currPos) {
      addClass(menu, 'menu--hide');
      addClass(sharer, 'sharer--hide');
    } else if (prevPos > currPos) {
      removeClass(menu, 'menu--hide');
      removeClass(sharer, 'sharer--hide');
    }

    prevPos = currPos;

  });
})(window, document);
