import React from "react";
import "./intro.css";

function ForgotPassword2() {
  return (
    <div className="intro_container">
      <div id="inner">
        <div className="title">Forgot your Password</div>
        <div className="row">
          <p id="forgot_pswd_describe2">
            Enter the code that has been sent to you at your email.
          </p>
        </div>
        <form className="forgot_form">
          <div className="row">
            <i className="fa fa-lock"></i>
            <input
              type="tel"
              placeholder="Enter code"
              id="forgot_code"
              required
            />
          </div>

          <div className="row">
            <input type="submit" id="submit_code" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword2;
