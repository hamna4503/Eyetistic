import React from "react";
import "./item.css";
import pic1 from "../images/shop/slider1.JPG";

const Item = (props) => {
  return (
    <div className="item-card" key={props.key}>
      <img src={require("../images/shop/" + props.pic)} alt="Product1" />
      <h3>{props.title}</h3>
      <p>Rs{props.price}</p>
      <div className="item-overlay">
        <div className="item-overlay-content">
          <h3>{props.title}</h3>
          <p>{props.type}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
