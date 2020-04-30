const path = require('path');


module.exports = {
  mode: "development",
  entry: "./client/singleItemPage.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'singleItemPage.js',
    publicPath: "/public/",
  },
  module:{
    rules:[
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}