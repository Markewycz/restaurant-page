const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },

  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
