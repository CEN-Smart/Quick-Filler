import React from "react";
import Fluent from "../../assets/fluent_box-20-filled.png";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./RealTime.css"
function RealTime() {
  return (
    <div className="realTimeContainer">
      <h1 className="title">
        Real-time tracking for accurate <br />
        delivery updates
      </h1>
      <div className="cardContainer">
        <div className="realTime-card">
          <img src={Fluent} alt="fluent" className="choose" />
          <p className="wide">Wide variety of gas options to<br/> choose from</p>
          <NavLink to="/more " className="mod">
            Learn More <FaAngleRight />
          </NavLink>
        </div>
        <div className="realTime-card">
          <img src={Fluent} alt="fluent" className="choose"  />
          <p className="wide">Convenient online ordering for <br/> hassle-free gas purchase</p>
          <NavLink to="/more" className="ultimate">
            Connect Wallet <FaAngleRight />
          </NavLink>
        </div>
        <div className="realTime-card">
          <img src={Fluent} alt="fluent" className="choose" />
          <p className="wide">Efficient delivery to your doorstep <br/>for ultimate convenience</p>
          <NavLink to="/more" className="ultimate">
            Get Started <FaAngleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RealTime;
