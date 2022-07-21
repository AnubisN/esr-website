import React from "react";
import Navbar from "../navbar/navbar.js";
import "./mainSection.css";

const MainSection = () => {
  return (
    <div
      style={{ backgroundImage: "url('./images/BG.png')" }}
      className="hero-container"
    >
      <div className="hero-section">
        <Navbar />
        <div className="hero-wrapper">
          <div className="hero-left-content">
            <h1 className="headingMainSection">
              We Build <span>Technology</span> Based Solution
            </h1>
            <p className="paragraphMainSection">
              With lots of unique blocks, you can easily build a page <br />{" "}
              without coding. Build your next website fast.
            </p>
            <button className="buttonMainSection">Get a Free Proposal</button>
          </div>
          <div className="hero-right-content">
            <div className="hero-img">
              <img src="./images/Image.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="background-esr">
          <h2>ESR Tech</h2>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
