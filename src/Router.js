import React from "react";
import { Route, Switch } from "react-router";

/*** Styles ***/
import "./App.css";

/*** Components ***/
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import List from "./components/List";

//link
import { Link } from "react-router-dom";
import thingStore from "./stores/thingStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/randomthings">
        <h1>hello random</h1>

        <List mylist="random" />
      </Route>
      <Route path="/treasure">
        <Link to="/">hello treasure</Link>
        <List mylist="treasure" />
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
