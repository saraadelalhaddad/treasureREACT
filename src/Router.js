import React from "react";
import { Route, Switch } from "react-router";

/*** Styles ***/
import "./App.css";

/*** Components ***/
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import RandomList from "./components/RandomList";
import TreasureList from "./components/TreasureList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/randomthings">
        <RandomList />
      </Route>
      <Route path="/treasure">
        <TreasureList />
      </Route>
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
