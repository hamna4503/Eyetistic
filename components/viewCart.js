import React, { useEffect, useState } from "react";
import axios from "axios";
import { user_id } from "./login";
import "./Cart.css";
import { FaTags } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function ViewProductCart() {
  const [Arr, setArr] = useState([]);
  const [Total, setTotal] = useState(0);
  var total = 0;

  function totalCalculate() {
    Arr.forEach((element) => {
      total += parseInt(element.prodPrice);
      console.log(total);
    });
    // setTotal(total);
  }
  useEffect(() => {
    axios
      .post("http://localhost/eyetistic/viewcart2.php", {
        Email: localStorage.getItem("Email"),
      })
      .then((response) => {
        setArr(response.data);
      })
      .then(totalCalculate())
      .then(setTotal(total));
    // .then(totalCalculate());
  }, []);
  return (
    <div className="CartMain">
      <Navbar />
      <Link to="/shop">Back to shopping</Link>
      <Link id="checkout" to="/checkout">
        Proceed to checkout
      </Link>
      <h1 id="cartHeading">Cart</h1>

      <div className="cart-div">
        {Arr.map((ele) => {
          return (
            <div className="cart">
              <img src={require("../images/shop/" + ele.prodImage)} alt="..." />
              <h3 id="name">{ele.prodName}</h3>
              <span>Type: {ele.prodCategory}</span>
              <span>
                <FaTags /> {ele.prodPrice}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewProductCart;
