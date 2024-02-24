import React from "react";
import "./Experience.css";
import Gas from "../../assets/cooking-gas.jpeg";
import ConnectWallet from "../connect/ConnectWallet";

function Experience() {
  return (
    <div className="jumbotron">
      <div className="text-container">
        <p className="style">
          <span className="future">
            Experience the <br />
          </span>
          <span className="">Future of gas filling</span>
        </p>
        <div className="filler">
          <p>
            Quick filler revolutionize gas filling with secure online transaction <br/> and
            XRP cryptocurrency integration
          </p>
        </div>
        <div className="button-container">
          <button className="learn">Learn more</button>
          <ConnectWallet />      
    </div>
      </div>
      <div className="cylinder">
        <img src={Gas} alt="gas" className="pic" />
      </div>
    </div>
  );
}

export default Experience;
