const path = require ('path')
module.exports = {
  devServer:{
    static:{
      directory: path.resolve(__dirname,'dist')
    }
  },
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
  mode:'development',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}