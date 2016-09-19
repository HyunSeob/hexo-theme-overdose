(function(window, document) {
  function bindClick(target, callback) {
    target.addEventListener('click', callback);
  }

  var shareUrls = {
    facebook:  '//www.facebook.com/sharer.php?u=',
    twitter:   '//twitter.com/intent/tweet?url=',
    pinterest: '//pinterest.com/pin/create/button/?url=',
    pocket:    '//getpocket.com/save?url='
  };
  var sharers = Object.keys(shareUrls);

  var url = encodeURIComponent([
    window.location.protocol,
    '//',
    window.location.host,
    window.location.pathname
  ].join(''));

  sharers.forEach(function(sharer) {
    document.getElementById('sharer-' + sharer)
    .addEventListener('click', function() {
      window.open(shareUrls[sharer] + url);
    });
  });
})(window, document);
