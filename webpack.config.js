const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/demo.tsx',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'demo.bundle.js',
  }, 

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Scrollable Graphs Demo",
    }),
  ],

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json' ],
    alias: {
      //src: resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src', 'components'),
    },
  },

  module: {
    rules: [
      {
        test: /\.((js|ts)x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          } 
        },
      },
    ]
  },
}
