const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    // Output directory and filename
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        // Rule for processing JavaScript and JSX files
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Babel presets for transpilation
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  // Dev server configuration
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    // File extensions that should be resolved
    extensions: ['.js', '.jsx']
  }
};