import React from "react";
import LandingPage from "./LandingPage";
import SignUpPage from "./Signuppage";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route exact path="/features" />
        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/about" />
        <Route exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
