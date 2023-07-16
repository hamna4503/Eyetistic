import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Email = localStorage.getItem("Email");
function Logout() {
  const nav = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost/eyetistic/emptyCart.php", { Email: Email })
      .then((response) => {
        console.log(response.data);
      });
    alert("Logout was successful. Redirecting to login");
    nav("/");
    localStorage.clear();
  });
}

export default Logout;
