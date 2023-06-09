const path = require ('path')
module.exports = {
  entry:{
    main : './src/index.js'
  },
  module:{
    rules:[{
      test : /\.js$/,
      use:['babel-loader']
    }],
    rules:[{
      test: /\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  mode:'production',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}