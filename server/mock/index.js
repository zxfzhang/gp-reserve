import bodyParser from "body-parser";
import DataStore from "./DataStore";

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const dataStore = new DataStore();

  app.get("/api/Schedule/:date", (req, res) => {
    setTimeout(() => {
      res.json(dataStore.getSchedule())
    }, 500);
  });

  app.get("/api/Provider/:id", (req, res) => {
    setTimeout(() => {
      res.json(dataStore.getProvider());
    }, 500);
  });

};
