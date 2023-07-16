import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./intro.css";

function Signup() {
  const [username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");

  const handlechangeUsername = (e) => {
    setusername(e.target.value);
  };
  const handlechangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlechangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlechangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const setNull = () => {
    setEmail("");
    setPassword("");
    setusername("");
    setPassword2("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Password != Password2) {
      alert("Recheck both passwords");
      setNull();
    } else {
      axios
        .post("http://localhost/eyetistic/signup.php", {
          username: username,
          Email: Email,
          Password: Password,
        })
        .then((response) => {
          if (response.data == "Email Exists") {
            alert("Email already has a registered user.");
            setNull();
          } else if (response.data == "Username Exists") {
            alert("Username taken by another user.");
            setNull();
          } else {
            if (response.data == "Success") {
              alert("Signup successful");
              window.location.href = "/";
            } else {
              alert("An error occured. Try again.");
            }
          }
        });
    }
  };
  return (
    <div className="intro_container">
      <div className="title">SIGNUP</div>
      <form className="signup_form" method="POST" onSubmit={handleSubmit}>
        <div className="row">
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="signup_name"
            placeholder=" Enter User Name"
            value={username}
            onChange={handlechangeUsername}
            required
          />
        </div>
        <div className="row">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            id="signup_email"
            value={Email}
            onChange={handlechangeEmail}
            placeholder=" Enter Email"
            required
          />
        </div>
        <div className="row">
          <i className="fa fa-key"></i>
          <input
            type="password"
            id="signup_password"
            placeholder="Enter Password"
            value={Password}
            onChange={handlechangePassword}
            required
          />
        </div>

        <div className="row">
          <i className="fa fa-key"></i>
          <input
            type="password"
            id="DOB"
            placeholder="Re-enter Password"
            value={Password2}
            onChange={handlechangePassword2}
            required
          />
        </div>
        <div className="row">
          <input type="submit" className="intro_button" value="Signup" />
        </div>
        <div className="row already">
          Already have an account?<Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;
