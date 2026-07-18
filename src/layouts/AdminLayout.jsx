import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthTokenValid } from "../utils/auth";

function AdminLayout() {
  if (!isAuthTokenValid()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AdminLayout;
