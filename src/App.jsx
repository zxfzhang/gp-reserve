import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppointmentContainer from "./containers/AppointmentContainer";
import DoctorDetailsContainer from "./containers/DoctorDetailsContainer";
import { ROUTES } from "./constants";

const App = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path={ROUTES.HOME} component={AppointmentContainer} />
      <Route exact path={ROUTES.DOCTOR} component={DoctorDetailsContainer} />
    </Switch>
  </Router>
);

export default App;
