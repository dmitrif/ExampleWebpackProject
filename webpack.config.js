const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: "./js/root.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
