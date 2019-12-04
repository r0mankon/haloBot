const path = require("path");

module.exports = {
   entry: "./src/index.js",

   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
   },

   module: {
      rules: [
         {
            test: /.(js|jsx)$/,
            include: [path.resolve(__dirname, "src")],
            loader: "babel-loader",

            options: {
               plugins: ["@babel/syntax-dynamic-import"],

               presets: ["@babel/preset-env"]
            }
         }
      ]
   }
};
