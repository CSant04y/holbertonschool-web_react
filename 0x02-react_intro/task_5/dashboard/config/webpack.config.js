const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [ "style-loader", "css-loader" ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          type: 'asset/resource',
          loader: 'image-webpack-loader',
        }
      ],
    },
    // plugins: [
    //   new CleanWebpackPlugin(),
    //   new HtmlWebpackPlugin({
    //     template: path.join(__dirname, "dist", "index.html"),
    //   }),
    // ],
};
