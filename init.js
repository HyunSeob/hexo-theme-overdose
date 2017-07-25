var fs = require('fs');
var path = require('path');
var deleteFolderRecursive = require('./util').deleteFolderRecursive;
var input = path.resolve(__dirname, '_config.yml.example');
var output = path.resolve(__dirname, '_config.yml');

fs.createReadStream(input).pipe(fs.createWriteStream(output));
deleteFolderRecursive(path.resolve(__dirname, '.git'));
fs.unlink(path.resolve(__dirname, '.gitignore'));