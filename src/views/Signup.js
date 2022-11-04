import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [signUpMessage, setSignUpMessage] = useState("");
  const [signUpDone, setSignUpDone] = useState(false);

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

    // username
    if (formData.username.trim().length < 4) {
      validatationErrors.username = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "user name powienien mieć 4 znaki",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.username.trim())) {
      validatationErrors.username = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "user name nie powienien mieć pustych znaków",
        };
      });
    } else {
      validatationErrors.username = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "",
        };
      });
    }
    // email
    if (formData.email.trim().length < 0) {
      validatationErrors.email = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "pole email nie może być puste",
        };
      });
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      validatationErrors.email = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "pole email nie może zawieać białych znaków!",
        };
      });
    } else {
      validatationErrors.email = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "",
        };
      });
    }
    //password
    if (formData.password.trim().length < 6) {
      validatationErrors.password = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "pole password nie może być puste",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.password.trim())) {
      validatationErrors.password = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password:
            "pole password musi zawierać co najmniej jedną cyfrę i co najmniej jeden z następujących znaków specjalnych: ! # @ $ % ",
        };
      });
    } else {
      validatationErrors.password = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "",
        };
      });
    }
    //repeatPassword
    if (formData.repeatPassword.trim()) {
      validatationErrors.repeatPassword = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          repeatPassword: "pole repeatPassword nie może być puste",
        };
      });
    } else if (
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password.trim())
    ) {
      validatationErrors.repeatPassword = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          repeatPassword:
            "pole repeatPassword musi być identyczne jak do pole password",
        };
      });
    } else {
      validatationErrors.repeatPassword = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          repeatPassword: "",
        };
      });
    }
  };
  console.log(formData.username);
  console.log(formData.email);
  console.log(formData.password);
  console.log(formData.repeatPassword);

  const handleSubmit = (e) => {
    // axios.post("http://akademia108.pl/api/social-app/user/signup");
    e.preventDefault();
    validate();
  };

  return (
    <div className="signup">
      <h2 className="nav-h">SignUp</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
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
            value={formData.repeatPassword}
          ></input>
        </form>
        <button className="btn-signup" onClick={setSignUpMessage}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
