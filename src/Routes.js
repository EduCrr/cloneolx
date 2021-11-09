import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import NotFound from "./components/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sobre">
        <Sobre />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
