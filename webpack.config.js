const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/mainDOM.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map'
};