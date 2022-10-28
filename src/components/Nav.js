import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import axios from "axios";

const Nav = (props) => {
  const handleLoggout = () => {
    axios
      .post("http://akademia108.pl/api/social-app/user/logout")
      .then((res) => {
        const logoutRes = res.data;
        // console.log(logoutRes.message);
        if (logoutRes.message) {
          localStorage.setItem("user", null);
          props.setUser(null);
        }
      })
      .catch((error) => {
        console.error(error);
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
        {props.user && (
          <li>
            <Link to="/" className="nav-list" onClick={handleLoggout}>
              Logout
            </Link>
          </li>
        )}
        {!props.user && (
          <li>
            <Link to="/login" className="nav-list">
              Login
            </Link>
          </li>
        )}
        {!props.user && (
          <li>
            <Link to="/signup" className="nav-list">
              SignUp
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
