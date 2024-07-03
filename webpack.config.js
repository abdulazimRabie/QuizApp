// html done
// css done
// babl done
// dev-server done
// cleanup

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry : "./src/js/index.js",


  module : {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use : ["style-loader", "css-loader"]
      }
    ]
  },

  plugins : [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'src/index.html'
      }
    )
  ],

  devServer : {
    open: true,
    port: 9000
  }
}