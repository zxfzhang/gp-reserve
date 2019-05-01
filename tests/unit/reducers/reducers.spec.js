import * as ACTION_TYPES from "../../../src/constants/ActionTypes";
import { reducers, INITIAL_STATE } from "../../../src/reducers";
import { FETCH_STATUS } from "../../../src/constants";
import TEST_DATA_SCHEDULES from "../../test-data/schedule.json";

describe("reducers", () => {
  const initialState = INITIAL_STATE;

  it("handles action SCHEDULE_SET", () => {
    const action = {
      payload: { list: TEST_DATA_SCHEDULES, error: undefined },
    };
    const state = reducers[ACTION_TYPES.SCHEDULE_SET](initialState, action);
    expect(state.schedules.list).toEqual(TEST_DATA_SCHEDULES);
    expect(state.schedules.fetchStatus).toEqual(FETCH_STATUS.LOADED);
    expect(state.schedules.error).toEqual("");
  });
});
