/**
 * Canonical Helper
 * @description Generate canonical tag.
 * @example
 *     canonical(config, page);
 */

hexo.extend.helper.register('canonical', function (config, page) {
  var base_url = config.url;
  if (config.url.charAt(config.url.length - 1) !== '/') base_url += '/';

  return '<link rel="canonical" href="' + base_url + page.canonical_path.replace('index.html', '') + '"/>';
});
