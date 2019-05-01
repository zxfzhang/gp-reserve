module.exports = (config) => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",
    captureTimeout: 120000,
    browserNoActivityTimeout: 100000,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "node_modules/babel-polyfill/dist/polyfill.js",
      // PhantomJS does not support ES6, polyfill.js is needed before the test sources.
      "tests/unit/**/*.js",
      "tests/unit/**/*.jsx",
    ],

    // list of files to exclude
    exclude: [],

    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-coverage",
      "karma-webpack",
      "karma-sourcemap-loader",
      "karma-html-reporter",
      "karma-junit-reporter",
      "karma-spec-reporter",
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/tests/unit/**/*.js": ["webpack", "sourcemap"],
      "**/tests/unit/**/*.jsx": ["webpack", "sourcemap"],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["spec", "junit", "html", "coverage"],

    coverageReporter: {
      dir: "tests/out/",
      reporters: [
        {
          type: "html",
          subdir: "coverage",
        },
      ],
      watermarks: {
        statements: [0, 10],
        functions: [0, 10],
        branches: [0, 10],
        lines: [0, 10],
      },
      check: {
        global: {
          statements: 10,
          lines: 10,
          functions: 10,
          branches: 0,
        },
      },
    },

    htmlReporter: {
      outputDir: "tests/out/unit",
      reportName: "result",
      namedFiles: true,
      urlFriendlyName: true,
    },

    junitReporter: {
      outputDir: "tests/out/unit",
      useBrowserName: false,
      outputFile: "result.xml",
    },

    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
        chunks: false,
      },
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    //  config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      mode: "development",
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: /src/,
            loader: "babel-loader",
            options: {
              presets: [["env", { modules: false }], "react", "stage-3"],
              plugins: ["istanbul", "transform-runtime", "transform-class-properties"],
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: /tests/,
            loader: "babel-loader",
            options: {
              presets: [["env", { modules: false }], "react", "stage-3"],
            },
          },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: "babel-loader?presets[]=es2015&presets[]=react!svg-react-loader",
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
      externals: {
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true,
      },
    },
  });
};
