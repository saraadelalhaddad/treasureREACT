import React from "react";
import { Route, Switch } from "react-router";

/*** Styles ***/
import "./App.css";

/*** Components ***/
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/signup">
        <SignUpForm />
      </Route>
        <Route path="/signup">
        <SignUpForm />
      </Route> */}
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
