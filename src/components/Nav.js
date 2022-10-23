import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
