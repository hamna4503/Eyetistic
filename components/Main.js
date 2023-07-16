import React, { useRef } from "react";
import covervid from "../videos/blogs.mp4";
import "./main.css";
import Navbar from "./Navbar";

const Main = () => {
  const newWebDesignRef = useRef(null);

  const handleViewNowClick = () => {
    if (newWebDesignRef.current) {
      newWebDesignRef.current.scrollIntoView({
        bottom: 2000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <section className="main-container">
        <div className="cover">
          <video autoPlay muted loop>
            <source src={covervid} type="video/mp4" />
          </video>

          <div className="main-cover">
            <div className="text">
              <h1>EYETISTIC BLOGS</h1>
              <p>
                Eyetistic aims to create a web platform where users not only
                buys high quality reasonable products but also gets access to
                informative blogs. Please give these Eyetistic blogs a read.
                HAPPY READING!
              </p>
            </div>

            <button className="button" onClick={handleViewNowClick}>
              VIEW NOW!
            </button>
          </div>
        </div>
        <section>
          <div ref={newWebDesignRef}></div>
        </section>
      </section>
    </div>
  );
};

export default Main;
