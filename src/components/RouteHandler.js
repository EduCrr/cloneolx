import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "../contexts/StateContext";

export default function RouteHandlder({ children, ...rest }) {
  const [state, dispatch] = useStateValue();
  let authorized = rest.private && !state.user.token ? false : true;
  return (
    <Route
      {...rest}
      render={() => (authorized ? children : <Redirect to="/login" />)}
    />
  );
}
