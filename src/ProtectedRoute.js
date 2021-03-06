import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
    component: Component,
   user,
  ...rest
}) {
   
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props}/>;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}