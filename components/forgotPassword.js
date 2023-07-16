import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./intro.css";

function ForgotPassword() {
  const nav = useNavigate();

  const [Email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/eyetistic/forgot.php", { Email: Email })
      .then((Response) => {
        if (Response.data == "verified") {
          nav("/forgotPassword_pg_2");
        } else {
          console.log("error");
          setEmail("");
        }
      });
  };
  return (
    <div className="intro_container">
      <div className="title">Forgot your Password</div>
      <div className="row">
        <p id="forgot_pswd_describe">Enter your email to send recovery code.</p>
      </div>
      <form className="forgot_form" method="POST" onSubmit={handleSubmit}>
        <div className="row">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="Enter your Email"
            value={Email}
            onChange={handleChangeEmail}
            id="forgot_email"
            required
          />
        </div>
        <div className="row">
          <button type="submit" id="proceed_button" className="intro_button">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
