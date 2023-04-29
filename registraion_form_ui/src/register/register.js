import React, { useState } from "react";
import "./register.css";
// import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobileNumber: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        placeholder="Enter your First Name"
        onChange={inputEvent}
      ></input>
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        placeholder="Enter your Last Name"
        onChange={inputEvent}
      ></input>
      <input
        type="text"
        name="mobileNumber"
        value={user.mobileNumber}
        placeholder="Enter your Mobile number"
        onChange={inputEvent}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your New Email"
        onChange={inputEvent}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your New Password"
        onChange={inputEvent}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="re-enter New Password"
        onChange={inputEvent}
      ></input>

      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
