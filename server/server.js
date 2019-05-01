import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import R from "ramda";
import enableMock from "./mock";
import Home from "./Home";

const app = express();

app.set("port", process.env.PORT_WEBSERVER || 3000);

// Bundle in memory, only used for development
if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack"); // eslint-disable-line global-require
  const webpackDevMiddleware = require("webpack-dev-middleware"); // eslint-disable-line global-require
  const webpackConfig = require("../webpack.config"); // eslint-disable-line global-require
  const compiler = webpack(R.mergeDeepRight(webpackConfig, { mode: "development" }));
  app.use(webpackDevMiddleware(compiler, {
    publicPath: "/lib/", // Same as `output.publicPath` in most cases.
  }));
} else {
  app.use("/lib", express.static(path.join(__dirname, "../")));
}

// Enable mock server for local developing.
enableMock(app);

app.get("/*", (req, res) => {
  /* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
  const document = renderToString(<Home />);
  res.status(200).send(`<!DOCTYPE html>${document}`);
});

app.listen(app.get("port"), () => {
  console.log(`Server started: http://localhost:${app.get("port")}/`);
});
