const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.jsx",
    _common: ["react-dom", "redux", "react-redux", "redux-thunk"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "_common",
    },
  },
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "[name].Bundle.js",
    publicPath: "/lib/",
    sourceMapFilename: "[name].Bundle.map",
  },
  devtool: process.env.NODE_ENV !== "production" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["env", { modules: false }], "react", "stage-3"],
          plugins: ["transform-runtime", "transform-class-properties"],
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015&presets[]=react!svg-react-loader",
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
        include: /syw-uikit/,
        options: {
          name: "assets/fonts/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "url-loader",
        include: /syw-uikit/,
        options: {
          limit: 10240,
          name: "assets/imgs/[name].[ext]",
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|gif)$/,
        exclude: /node_modules/,
        loader: "url-loader?mimetype=image/png",
      },
      { test: /\.html$/, loader: "html" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
