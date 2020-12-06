import * as path from "path";
import * as webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: (env: { app: "react" | "vanilla" }) => webpack.Configuration = (
  env
) => ({
  entry: `./src/${env.app}/${env.app === "react" ? "index.tsx" : "index.js"}`,
  output: {
    path: path.resolve(__dirname, "dist", env.app),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.[tj]sx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/${env.app}/index.html`,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist", env.app),
    compress: true,
    port: env.app === "react" ? 9000 : 9001,
  },
});

export default config;
