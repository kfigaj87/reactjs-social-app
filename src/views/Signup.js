import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = (props) => {
  const [formData, setFormData] = useState[""];
  const [errors, setErrors] = useState();
  const [signUpMessage, setSignUpMessage] = useState();
  const [signUpDone, setSignUpDone] = useState();

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: target.value,
    });
  };

  const validate = () => {
    let validatationErrors = {
      username: false,
      email: false,
      password: false,
      repeatPassword: false,
    };
  };

  const handleSubmit = () => {
    axios.post("http://akademia108.pl/api/social-app/user/signup");
  };

  return (
    <div className="signup">
      <h2 className="nav-h">SignUp</h2>
      <div className="signup-form">
        <form>
          <input
            type="text"
            name="username"
            placeholder="User name"
            onChange={handleInputChange}
            value={formData.username}
          ></input>
          {/* <br></br> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
          ></input>
          {/* <br></br> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
          ></input>
          {/* <br></br> */}
          <input
            type="password"
            name="password"
            placeholder="Repeat password"
            onChange={handleInputChange}
            value={formData.repeatpassword}
          ></input>
        </form>
        <button className="btn-signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;

// /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test('string') – wyrażenie regularne – sprawdzanie czy jest znak specjalny
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test('string') – wyrażenie regularne – sprawdzanie czy jest to adres email
// /^[^\s]*$/.test('string') – wyrażenie regularne – sprawdzanie czy jest pusty znak w ciągu znaków
