import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
          password: "pole password nie może mieć białych znaków!",
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
            "pole password musi zawierać co najmniej jedną cyfrę i co najmniej jeden z następujących znaków specjalnych: ! # @ $ %",
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

    if (formData.repeatPassword.trim() !== formData.repeatPassword.trim()) {
      validatationErrors.repeatPassword = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          repeatPassword: "hasło powinno być takie same",
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
    return (
      !validatationErrors.username &&
      !validatationErrors.email &&
      !validatationErrors.password &&
      !validatationErrors.repeatPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    let newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    axios
      .post(
        "http://akademia108.pl/api/social-app/user/signup",
        JSON.stringify(newUser)
      )
      .then((req) => {
        let reqData = req.data;
        if (reqData.signedup) {
          setSignUpMessage("Account created");
          setSignUpDone(true);
          setFormData({
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
          });
        } else {
          if (reqData.message.username) {
            setSignUpMessage(reqData.message.username[0]);
          } else if (reqData.message.email) {
            setSignUpMessage(reqData.message.email[0]);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup">
      <h2 className="nav-h">SignUp</h2>
      <div className="signup-form">
        <form className="signup-form-form" onSubmit={handleSubmit}>
          {errors.username && <span>{errors.username}</span>}
          <input
            className="inputArea signUpArea"
            type="text"
            name="username"
            placeholder="User name"
            onChange={handleInputChange}
            value={formData.username}
          ></input>

          {errors.email && <span>{errors.email}</span>}
          <input
            className="inputArea signUpArea"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
          ></input>

          {errors.password && <span>{errors.password}</span>}
          <input
            className="inputArea signUpArea"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
          ></input>

          {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
          <input
            className="inputArea signUpArea"
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            onChange={handleInputChange}
            value={formData.repeatPassword}
          ></input>
          <button className="button btnSignup">
            {" "}
            <FontAwesomeIcon icon={faUser} /> {""}Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
