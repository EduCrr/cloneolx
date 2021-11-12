import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import NotFound from "./components/NotFound";
import Login from "./Pages/Login";
import Cadastrar from "./Pages/Cadastrar";
import AdPage from "./Pages/AdPage";
import RouteHandlder from "./components/RouteHandler";
import AddAd from "./Pages/AddAd";
import Ads from "./Pages/Ads";
export default function Routes() {
  return (
    <Switch>
      <RouteHandlder exact path="/">
        <Home />
      </RouteHandlder>
      <RouteHandlder exact path="/sobre">
        <Sobre />
      </RouteHandlder>
      <RouteHandlder exact path="/login">
        <Login />
      </RouteHandlder>
      <RouteHandlder exact path="/cadastrar">
        <Cadastrar />
      </RouteHandlder>
      <RouteHandlder exact path="/ad/:id">
        <AdPage />
      </RouteHandlder>
      <RouteHandlder private exact path="/post-an-ad">
        <AddAd />
      </RouteHandlder>
      <RouteHandlder exact path="/ads">
        <Ads />
      </RouteHandlder>
      <RouteHandlder>
        <NotFound />
      </RouteHandlder>
    </Switch>
  );
}
