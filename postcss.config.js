 module.exports = {
  plugins: [
    require('postcss-import')({
      parh: 'src/css',
    }),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions'],
    }),
    require('cssnano')(),
  ]
};
