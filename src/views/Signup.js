import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h2 className="nav-h">SignUp</h2>
      <div className="signup-form">
        <form>
          <input type="text" name="username" placeholder="User name"></input>
          {/* <br></br> */}
          <input type="email" name="email" placeholder="Email"></input>
          {/* <br></br> */}
          <input type="password" name="password" placeholder="Password"></input>
          {/* <br></br> */}
          <input
            type="password"
            name="password"
            placeholder="Repeat password"
          ></input>
        </form>
        <button className="btn-signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
