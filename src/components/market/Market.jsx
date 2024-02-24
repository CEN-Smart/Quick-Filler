import React from "react";
import {FaAngleRight} from "react-icons/fa"
import MaleAttendant from "../../assets/maleAttendant.jpeg"
import "./Market.css"
import ConnectWallet from "../connect/ConnectWallet";

function Market() {
  return (
    <div className="marketContainer">
      <div className="orderTextContainer">
        <span className="save">
          Market Impact and Customer <br />
          Satisfaction Rates
        </span>
        <p className="user">
          Discover the impressive statistics that showcase Quick Filler's market
          impact, high customer satisfaction rates, and secure transactions.
        </p>
        <div className="time">
          <div>
            <span className="fast">50%</span>
            <p className="user">Increase in Customer Base Year over Year</p>
          </div>
          <div>
            <span className="fast">50%</span>
            <p className="user">Reduction in Transaction Time with XRP Integration</p>
          </div>
        </div>
        <div className="button-container">
            <button className="outline">Learn More</button>
            <button className="wallet">Connect Wallet  </button>
          </div>

      </div>
      <div>
        <img src={MaleAttendant} alt="attendant" />
      </div>
    </div>
  );
}

export default Market;
