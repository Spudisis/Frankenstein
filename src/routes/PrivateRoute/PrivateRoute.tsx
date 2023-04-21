import React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteType } from "./PrivateRoute.types";

export const ProtectedRoute = ({
  auth,
  redirectPath = "/helloPage",
  children,
}: PrivateRouteType) => {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
