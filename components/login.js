import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./intro.css";
import Shop from "./Shop";

var user_id = "";
function Login() {
  const nav = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/eyetistic/login.php", {
        Email: Email,
        Password: Password,
      })
      .then((Response) => {
        if (Response.data === "verified") {
          console.log("Login Successful");
          user_id = Email;
          localStorage.setItem("Email", Email);
          window.location.href = "/home";
        } else {
          setEmail("");
          setPassword("");
          alert("Login Unsuccessful. Try again.");
        }
      });
  };
  return (
    <div>
      {/* <Video /> */}
      <div className="intro_container">
        <div className="title">LOGIN</div>
        <form className="login_form" method="POST" onSubmit={handleSubmit}>
          <div className="row">
            <i className="fa fa-user" id="person_icon"></i>
            <input
              type="email"
              id="email"
              name="login_email"
              placeholder="Enter Email"
              value={Email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="row">
            <i className="fa fa-key" id="password_icon"></i>
            <input
              type="password"
              id="password"
              name="login_password"
              placeholder="Enter Password"
              value={Password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <div className="row">
            <Link to="/forgotPassword_pg_1" id="Forgot_password">
              Forgot your password?
            </Link>
          </div>
          <div className="row">
            <input type="submit" className="intro_button" value="Login" />
          </div>
          <div className="row already">
            Don't have an account?<Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Login, user_id };
