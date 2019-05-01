# General Practioner Reservation App

A technical practise for simulating General Practioner Reservation application to allow patients browsing 
available time slots for GPs and detailed information about GP. The UI is designed to fit mobile screen
size.

---
## Getting started
### Tech Stack
This application is based on the following tools/libraries:
- UI Render: **React/Redux, SASS**.
- Bundler: **Webpack**.
- Lint check: **ESlint, eslint-config-airbnb**.
- Unit Testing: **Jasmine, Enzyme, Karma**.
- Web Server: **Express**.

### Setup
1. Clone the project from Git repo.
2. Make sure you have node installed (install Node.js v8.X, NPM 6.X).
3. Switch to top level directory.
4. `npm install`.

## Development Mode:

### Run dev mode
Dev mode enables [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware), will cause `Webpack` to compile files in-memory - code changes are saved and updated when refreshing page in browser.

1. Switch to top level directory.
2. `npm run start:dev` to start web server.
3. Go to browser and hit http://localhost:3000 to launch.

**_Notes:_** All the APIs returning JSON data from web server are mocked data in local server, so the data are just for dispaying UI elelment and not coresponding to you actual actions.

#### Static Analysis (Eslint)
The project is covered with `eslint` rules to ESS standard in `eslint-config-airbnb`, [details](https://github.com/airbnb/javascript)

1. Switch to top level directory.
2. Run `npm run check:lint` to do the lint check.
3. Review `tests/out/lint-report.html` for lint report.

### Unit tests
Specs for Unit Test all locate `tests/unit` of each package and are written in `Jasmine`, executing via `Karma` on `phantomJS`. Code coverage is run by `karma` plugins.

1. Switch to top level directory.
2. Run `npm run test:unit` to start the Unit Test.
3. Review `tests/out/unit` for UT reports.
4. Review `tests/out/coverage` for UT coverage reports.

**_Notes:_** Unit Tests are also for demo purpose so not all the code are fully covered by Unit Tests.

## Production Mode:

### Run prod mode
1. Switch to top level directory.
2. Run `npm run build` (to pack web files via Webpack and convert JS into ES5 via Babel).
3. Run `npm start` (to start web server in prod mode).
4. Go to browser and hit http://localhost:3000 to launch.

### Try it now

An deployment is ready on cloud, clik below link to take a look now!
http://zxfzhang.s3-website-ap-southeast-2.amazonaws.com/
