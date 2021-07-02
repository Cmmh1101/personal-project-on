import React from "react";
import LandingPage from "./LandingPage";
import SignUpPage from "./Signuppage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "../pages/HomePage";

function Main() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route exact path="/features" />
        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/about" />
        <Route exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
