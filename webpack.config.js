module.exports = {
  entry: {
     page1: "./app/index.js"
  },
  output: {
     // Make sure to use [name] or [id] in output.filename
     //  when using multiple entry points
     filename: "./app/bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: ['node_modules','bower_components','app/bundle.js'],
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          // presets: ['es2015']
          // plugins: ["lodash"]
        }
      }
    ]
  }
};
