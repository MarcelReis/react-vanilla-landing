import * as path from "path";
import * as webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: (env: {
  app: "react" | "vanilla";
  mode: "production" | "development";
}) => webpack.Configuration = (env) => ({
  entry: `./src/${env.app}/${env.app === "react" ? "index.tsx" : "index.js"}`,
  mode: env.mode,
  output: {
    path: path.resolve(__dirname, "dist", env.app),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          publicPath: "/",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.[tj]sx?$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".jsx", ".js", ".ts"],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/${env.app}/index.html`,
    }),
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, "dist", env.app),
      path.join(__dirname, "src", "common", "assets"),
    ],
    contentBasePublicPath: ["/", "/assets"],
    port: env.app === "react" ? 9000 : 9001,
  },
});

export default config;
