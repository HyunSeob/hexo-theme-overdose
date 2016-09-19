(function(window, document) {

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
    var elem = document.getElementById('sharer-' + sharer);
    if (!elem) return;

    elem.addEventListener('click', function() {
      window.open(
        shareUrls[sharer] + url,
        'Share to ' + sharer,
        'toolbar=0,location=0,menubar=0,height=400,width=600'
      );
    });
  });

})(window, document);
