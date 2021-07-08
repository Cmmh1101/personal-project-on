import React from "react";
import SignUpPage from "./Signuppage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";

function Main() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/homepage" component={HomePage} />

        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/loginpage" component={LoginPage} />

        <Route exact path="/dashboardpage" component={DashboardPage} />
        <Route exact path="/contactus" />
        <Redirect to="/homepage" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
