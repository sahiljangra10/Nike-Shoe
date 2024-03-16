import React from "react";
import "./Hero.css";
import shoe from "../assets/shoe.png";
import amazonlogo from "../assets/amazon-logo.png";
import flipkartlogo from "../assets/flipkart-logo.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>YOUR FEET <br />DESERVE <br />THE BEST</h1>
        <p>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best and we are here to help you with our shoes.</p>
        <div className="buttons">
          <button id="btn-1">Shop Now</button>
          <button id="btn-2">Category</button>
        </div>
        <div className="shares">
          <span>Also availavble on</span>
          <div className="images">
            <img src={flipkartlogo} id="img-1"/>
            <img src={amazonlogo} id="img-2" />
          </div>
        </div>
      </div>
      <img src={shoe} className="right"/>
    </div>
  );
}

export default Hero;
