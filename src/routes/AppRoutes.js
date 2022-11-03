import React from "react";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

import { Routes, Route } from "react-router-dom";
import "./AppRoutes.css";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home user={props.user} setUser={props.setUser} />}
      />
      <Route
        path="login"
        element={<Login user={props.user} setUser={props.setUser} />}
      />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
