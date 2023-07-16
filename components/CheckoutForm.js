import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertBox from "./AlertBox";
import "./styles.css";
import "./Contact.css";
import axios from "axios";
import Navbar from "./Navbar";

export default function CheckoutForm() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });
  const Email = localStorage.getItem("Email");
  var pattern = /^\d+$/;

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.Name === "" ||
      formData.Email === "" ||
      formData.Phone === "" ||
      formData.Address === ""
    ) {
      setAlertMessage("Input all the required fields");
      setIsAlertOpen(true);
    } else if (formData.Address.length >= 200) {
      setAlertMessage("Address should not exceed 200 words!");
      setIsAlertOpen(true);
    } else if (
      formData.Phone.length > 11 ||
      formData.Phone.length !== 11 ||
      pattern.test(formData.Phone) !== true
    ) {
      setAlertMessage("Invalid Contact Number!");
      setIsAlertOpen(true);
    } else {
      // Send data to the database
      fetch("http://localhost/eyetistic/order.php", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.text())
        .then((data) => {
          setAlertMessage("Your Order Have Been Placed!");
          setIsAlertOpen(true);
          console.log(data); // Display response from PHP script
        })
        .then(
          axios
            .post("http://localhost/eyetistic/emptyCart.php", { Email, Email })
            .then((response) => console.log(response.data))
        )
        .then(nav("/home"))
        .catch((error) => {
          setAlertMessage("Can't Place Order!");
          setIsAlertOpen(true);
          console.error("Error:", error);
        });
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div id="contact">
      <Navbar />
      <div className="contact-head">
        <div id="content">
          <h1> Order Summary </h1>
          <p>Thank you for choosing us!</p>
          <h2>Sub-Total : </h2>
          <h2> Shipping Charges: </h2>
          <h2>Net Amount: </h2>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-fields">
              <h2>Place Order</h2>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Name"
                className="checkOutInput"
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                className="checkOutInput"
              />
              <input
                type="text"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="Phone"
                className="checkOutInput"
              />
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="checkOutInput"
              />
              <div className="form-btns">
                <Link className="CheckoutButton" id="LinkButton" to="/shop">
                  Keep Shopping
                </Link>
                <input
                  type="submit"
                  className="CheckoutButton"
                  value="Confirm Order"
                />
              </div>
            </div>
          </form>
          <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
          </AlertBox>
        </div>
      </div>
    </div>
  );
}
