module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')(),
    require('postcss-single-charset')(),
  ]
};
