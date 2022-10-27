import React from "react";

// import axios from "axios";

import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Loggout from "../views/Signup";
import { Routes, Route } from "react-router-dom";
import "./AppRoutes.css";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="login"
        element={<Login user={props.user} setUser={props.setUser} />}
      />

      <Route path="signup" element={<Signup />} />
      <Route
        path="loggout"
        element={<Loggout user={props.user} setUser={props.setUser} />}
      />
    </Routes>
  );
};

export default AppRoutes;
