/**
 * Filter triggered by post rendering.
 */

function imgTpl(url) {
  return '<img src="' + url + '"/>';
}

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.banner) {
    var img = imgTpl(data.banner.url);
    data.content = img + data.content;
  } else if (data.photos && data.photos.length) {
    var imgs = data.photos.map(imgTpl).join('');
    data.content += imgs + data.content;
  }
  return data;
});
