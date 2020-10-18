const path = require("path");
const srcDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "public");

const production = process.env.NODE_ENV !== "development";

const config = {
  mode: production ? "production" : "development",
  devtool: production ? "source-map" : "eval-source-map",
  entry: "./src/main.js",
  output: {
    filename: "[name].bundle.js",
    path: outDir,
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: srcDir,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                regenerator: true,
              },
            ],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-typescript",
          ],
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  devServer: {
    contentBase: outDir,
    compress: true,
    watchContentBase: true,
  },
};

module.exports = config;
