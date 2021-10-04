const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "@shopify/swcify/webpack",
        options: {
          jsc: {
            target: "es2016",
            parser: {
              tsx: true,
              dynamicImport: true,
              syntax: "typescript",
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.json'],
  },
  output: {
    filename: "es6.js",
    path: path.resolve(__dirname, "dist"),
  },
};
