import MOCK_DATA_SCHEDULE from "./data/schedule.json";
import MOCK_DATA_PROVIDER from "./data/provider.json";

module.exports = function DataStore() {
  this.getSchedule = () => {
    return MOCK_DATA_SCHEDULE;
  };

  this.getProvider = () => {
    return MOCK_DATA_PROVIDER;
  };
};
