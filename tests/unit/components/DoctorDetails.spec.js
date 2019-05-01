import React from "react";
import { mount } from "../Enzyme";
import { BrowserRouter } from "react-router-dom";
import DoctorDetails from "../../../src/components/doctor/DoctorDetails";
import { FETCH_STATUS } from "../../../src/constants";
import TEST_DATA_DOC_DETAILS from "../../test-data/provider.json";

describe("<DoctorDetails />", () => {
  const router = {
    history: new BrowserRouter().history,
    route: {
      location: {},
      match: {},
    },
  };

  const createContext = () => ({
    context: { router },
    childContextTypes: { router: {} },
  });

  it("should render a DoctorDetails", () => {
    const testProps = {
      error: "",
      fetchStatus: FETCH_STATUS.LOADED,
      info: TEST_DATA_DOC_DETAILS,
    };
    const componentsWrapper = mount(<DoctorDetails {...testProps} />, createContext());
    expect(componentsWrapper.find(".vensa-theme-doctor-details__name").text()).toEqual(testProps.info.Name);
  });
});
