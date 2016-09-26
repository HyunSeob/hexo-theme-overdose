var _ = require('lodash');

function parseId(postData, type) {
  type = type || 'tags';
  return postData[type].data.map(function(t) { return t._id; });
}

function getSimilarityScore(arrA, arrB) {
  if (!arrA.length || !arrB.length) return 0;
  return Math.sqrt(
    _.intersection(arrA, arrB).length / Math.max(arrA.length, arrB.length)
  );
}

function getPostSimilarity(postA, postB) {
  return getSimilarityScore(
    parseId(postA, 'tags'),
    parseId(postB, 'tags')
  ) * 2 + getSimilarityScore(
    parseId(postA, 'categories'),
    parseId(postB, 'categories')
  );
}

/**
 * Related Posts helper
 * @description Find related posts.
 * @example
 *      related_posts(post, 3);
 */

hexo.extend.helper.register('related_posts', function (target, max) {
  var posts, relatedPosts;

  max = max || 3;
  posts = hexo.locals.get('posts').data;

  return posts.map(function(p) {
    p.similarityScore = getPostSimilarity(target, p);
    return p;
  }).sort(function(a, b) {
    return b.similarityScore - a.similarityScore;
  }).filter(function(p) {
    return (p._id !== target._id) && (p.similarityScore > 0);
  }).slice(0, max);
});
