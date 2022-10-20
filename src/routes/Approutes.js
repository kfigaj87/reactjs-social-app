import React from "react";

import axios from "axios";

import Home from "../views/Home";
import Login from "../views/Login";
import Singup from "../views/Signup";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="login" element={<Login />} />

      <Route path="singup" element={<Singup />} />
    </Routes>
  );
};

export default AppRoutes;
