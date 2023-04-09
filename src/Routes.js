import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import HourlyContainer from "./HourlyContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:placeName/:day" component={HourlyContainer} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};
export default Routes;
