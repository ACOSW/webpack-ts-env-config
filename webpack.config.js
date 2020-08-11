const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const deployment = process.env.DEPLOYMENT || "dev";

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.resolve("./dist"),
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      config: path.resolve(`./config.${deployment}.ts`),
    },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
