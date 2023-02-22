// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./src/css",
          to: path.resolve(__dirname, "public/css"),
        },
        {
          from: "./src/images",
          to: path.resolve(__dirname, "public/images"),
        },
        {
          from: "./src/js/dataset.js",
          to: path.resolve(__dirname, "public/js/"),
        },
        {
          from: "./src/files",
          to: path.resolve(__dirname, "public/files/"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
