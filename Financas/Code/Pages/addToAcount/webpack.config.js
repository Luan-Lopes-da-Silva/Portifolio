const path = require ('path')
module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
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
  mode:'production',
  output:{
    filename: '[name].min.js'
  }
}