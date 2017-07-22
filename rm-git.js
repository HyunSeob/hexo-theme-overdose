var fs = require('fs');
var path = require('path');
var libsPath = path.resolve(__dirname, 'source', 'libs');
var delPaths = [
  path.resolve(libsPath, 'noto-sans-kr', '.git'),
  path.resolve(libsPath, 'spoqa-han-sans-kr', '.git'),
  path.resolve(libsPath, 'spoqa-han-sans-jp', '.git')
];
var deleteFolderRecursive = require('./util').deleteFolderRecursive;

delPaths.forEach(function(path) {
  deleteFolderRecursive(path);
});

