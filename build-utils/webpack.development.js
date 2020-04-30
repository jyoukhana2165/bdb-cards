const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  // plugins: [
  //   // Copy empty ServiceWorker so install doesn't blow up
  //   // new CopyWebpackPlugin(['src/sw.js'])
  // ],
  devtool: 'source-map'
});