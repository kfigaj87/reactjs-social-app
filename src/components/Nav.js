import React from "react";
import { Link, useState } from "react-router-dom";
import "./Nav.css";
import axios from "axios";

const Nav = (props) => {
  const handleLoggout = () => {
    axios
      .post("http://akademia108.pl/api/social-app/user/logout")
      .then((res) => {
        const logoutRes = res.data;

        props.setUser(logoutRes);
      });
  };

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-list">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="nav-list">
            SignUp
          </Link>
        </li>
        <li>
          <div>
            <Link to="/loggout" className="nav-list">
              <button onClickCapture={handleLoggout}>Logout</button>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
