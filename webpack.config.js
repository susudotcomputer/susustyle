module.exports = {
  mode: "development",
  output: {
    path: __dirname+'/dist',
    filename: "[name].js",
    library: 'config',
    libraryTarget: "commonjs2"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  }
}