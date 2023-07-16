import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar.js";
import Item from "./item";
import axios from "axios";
import "./shop.css";
import { FaSearch } from "react-icons/fa";
import SimpleImageSlider from "react-simple-image-slider";
import slider1 from "../images/shop/slider1.JPG";
import slider3 from "../images/shop/product11.jpg";
import slider4 from "../images/shop/product10.jpg";
function Shop() {
  const [Arr, setArr] = useState([]);
  const [Filter, setFilter] = useState("Lens");
  const [Search, setSearch] = useState("");
  const [Email, setEmail] = useState("");

  const temp = localStorage.getItem("Email");
  const Cart = new Array();

  useEffect(() => {
    axios.get("http://localhost/eyetistic/shop.php").then((response) => {
      setEmail(temp);
      setArr(response.data);
    });
  }, []);
  function handleSearch() {
    if (Search === "") {
      alert("Kindly enter something first");
    } else {
      axios
        .post("http://localhost/eyetistic/search.php", { item: Search })
        .then((response) => {
          if (response.data === "not found") {
            axios
              .get("http://localhost/eyetistic/shop.php")
              .then((response) => {
                setArr([]);
              });
          } else {
            setArr(response.data);
            setSearch("");
          }
        });
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function glassesOnly(event) {
    event.preventDefault();
    setFilter("glasses");
    axios
      .post("http://localhost/eyetistic/filter.php", { category: Filter })
      .then((response) => {
        setArr(response.data);
      });
  }
  function lensOnly(event) {
    event.preventDefault();
    setFilter("Lens");
    axios
      .post("http://localhost/eyetistic/filter.php", { category: Filter })
      .then((response) => {
        setArr(response.data);
      });
  }

  function All(e) {
    e.preventDefault();
    axios.get("http://localhost/eyetistic/shop.php").then((response) => {
      setArr(response.data);
    });
  }

  const images = [slider1, slider4, slider3];
  return (
    <div className="ShopMain">
      <Navbar />

      <div className="mainFirstContainer">
        {/* <ShopSlider />
         */}
        <SimpleImageSlider
          images={images}
          width={1400}
          height={600}
          showBullets={true}
          autoPlay={true}
          autoPlayDelay={2}
        />
        <div className="firstContainer">
          <p>
            We have a wide range of products. Have a look by clicking on the
            button below.
          </p>
          <button
            id="explore"
            onClick={() => {
              console.log("explore");
            }}
          >
            Explore shop
          </button>
        </div>
      </div>

      <div className="optContainer">
        <button type="submit" onClick={All}>
          All
        </button>
        {/* <button>Sort</button> */}
        <button type="submit" onClick={glassesOnly}>
          Glasses
        </button>
        <button onClick={lensOnly}>Lens</button>

        <FaSearch id="searchIcon" />
        <input
          type="text"
          placeholder="Type to search"
          value={Search}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="productGrid">
        {Arr.map((Element) => {
          return (
            <div>
              <Item
                key={Element.prodid}
                title={Element.prodName}
                price={Element.prodPrice}
                type={Element.prodCategory}
                pic={Element.prodImage}
              />
              <button
                id="addToCart"
                onClick={() => {
                  if (!Cart.includes(Element.prodid)) {
                    Cart.push(Element.prodid);
                    axios
                      .post("http://localhost/eyetistic/viewcart.php", {
                        Email: Email,
                        item: Element.prodid,
                      })
                      .then((response) => {
                        console.log(response.data);
                      });
                  }
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
