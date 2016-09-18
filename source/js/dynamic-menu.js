(function(window, document) {
  function hide(target, targetName) {
    if (!target.classList.contains(targetName + '--hide')) {
      target.classList.add(targetName + '--hide');
    }
  }

  function show(target, targetName) {
    if (target.classList.contains(targetName + '--hide')) {
      target.classList.remove(targetName + '--hide');
    }
  }

  window.onload = function() {
    var prevPos = 0, currPos = 0;
    var menu = document.getElementById('menu');
    var article = document.getElementById('article');
    var articleBottom = article ? article.offsetTop + article.scrollHeight : null;

    window.addEventListener('scroll', function() {

      currPos = window.scrollY || window.pageYOffset || document.body.scrolTop;

      if (currPos < 0) currPos = 0;

      if (articleBottom && currPos > articleBottom) {
        show(menu, 'menu');
      } else if (prevPos < currPos) {
        hide(menu, 'menu');
      } else if (prevPos > currPos) {
        show(menu, 'menu');
      }

      prevPos = currPos;

    });
  };
})(window, document);
