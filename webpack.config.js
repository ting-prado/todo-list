const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    indexDOM: './src/indexDOM.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map'
};