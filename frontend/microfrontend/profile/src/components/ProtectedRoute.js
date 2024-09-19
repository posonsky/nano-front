import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isJwt = () => {
    const jwt = localStorage.getItem("jwt");
    return jwt !== null && jwt.length > 0;
  };

  return (
    <Route exact>
      {() => (isJwt() ? <Component {...props} /> : <Redirect to="./signin" />)}
    </Route>
  );
};

export default ProtectedRoute;
