import "isomorphic-fetch";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../../src/actions";
import { APIS } from "../../../src/constants";
import * as ACTION_TYPES from "../../../src/constants/ActionTypes";
import { INITIAL_STATE } from "../../../src/reducers";
import TEST_DATA_SCHEDULES from "../../test-data/schedule.json";

describe("actions", () => {
  const initialState = INITIAL_STATE;
  const mockStore = configureStore([thunk]);

  afterEach(() => {
    fetchMock.restore();
  });

  it("should load schedules when fetch successfully", (done) => {
    const store = mockStore(initialState);
    const date = new Date(2019, 3, 28);
    const url = APIS.GET_SCHEDULES.replace(":date", "2019-04-28");
    fetchMock.mock(url, {
      headers: { "content-type": "json" },
      body: JSON.stringify(TEST_DATA_SCHEDULES),
    });
    store.dispatch(actions.fetchSchedules(date)).then(() => {
      const expectedActions = [
        {
          type: ACTION_TYPES.SCHEDULE_FETCHING,
        },
        {
          type: ACTION_TYPES.SCHEDULE_SET,
          payload: {
            list: TEST_DATA_SCHEDULES,
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
