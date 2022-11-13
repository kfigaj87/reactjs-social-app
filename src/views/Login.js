import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const [formData, setFromData] = useState({
    username: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState();

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFromData({
      ...formData,
      [name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      username: formData.username,
      password: formData.password,
    };

    // console.log("działam");
    axios
      .post(
        "http://akademia108.pl/api/social-app/user/login",
        JSON.stringify(user)
      )
      .then((res) => {
        console.log(res);
        const loginRes = res.data;

        if (Array.isArray(loginRes.username)) {
          setLoginMessage(loginRes.username[0]);
        } else if (Array.isArray(loginRes.password)) {
          setLoginMessage(loginRes.password[0]);
        } else if (loginRes.error) {
          setLoginMessage("inncorect username or password");
        } else {
          setLoginMessage("");
          props.setUser(loginRes);
          localStorage.setItem("user", JSON.stringify(loginRes));
          console.log(loginRes);
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login">
      {props.user && <Navigate to="/" />}
      <h2 className="nav-h">Login</h2>
      <div className="formLog">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username </label>
          <input
            className="inputArea"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleInputChange}
            value={formData.username}
          />
          <label htmlFor="password"> Password </label>
          <input
            className="inputArea"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <button className="button btnHome">
            <FontAwesomeIcon icon={faKey} /> {""} Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
