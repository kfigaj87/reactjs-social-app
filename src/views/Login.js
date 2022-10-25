import React, { useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";

const Login = (props) => {
  const [loginMessage, setLoginMessage] = useState();

  const handleSubmit = () => {
    console.log("działam");
    axios
      .post("http://akademia108.pl/api/social-app/user/login")
      .then((res) => {
        const loginRes = res.data;
        setLoginMessage(loginRes);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="login">
      <h2 className="nav-h">Login</h2>
      <div className="form-log">
        <form>
          <label htmlFor="username">Username </label>
          <input type="text" name="username" placeholder="username" />
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" placeholder="password" />
          <button className="button btn-home" onClick={""}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
