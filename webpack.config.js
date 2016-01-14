var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'test.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [
        path.join(__dirname, 'test.js'),
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules', 'react-line')
      ]}
    ]
  }
};
