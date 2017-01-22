/**
 * Banner Helper
 * @description Get banner url from post.
 * @example
 *     bannerOf(post);
 */

hexo.extend.helper.register('bannerOf', function (post) {
    if(post.banner && hexo.config.post_asset_folder && post.banner.url.split('/').length === 1){
      post.banner.url = post.path + post.banner.url;
    }
    var url = post.banner ? post.banner.url : (post.photos && post.photos.length ? post.photos[0] : '');
    var imgRegex = /\<img\s.*?\s?src\s*=\s*['|"]?([^\s'"]+).*?\>/ig;
    if (!url) {
        var result = imgRegex.exec(post.content);
        if (result && result.length > 1) {
            url = result[1];
        }
    }
    return url;
});
