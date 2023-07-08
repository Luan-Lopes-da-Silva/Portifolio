const path = require ('path')
module.exports = {
  entry:{
    main : './src/index.js'
  },
  module:{
    rules:[{
      test : /\.css$/,
      use:['style-loader','css-loader']
    },{
      test : /\.js$/,
      use:['babel-loader']
    }]
  },
  mode:'development',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}