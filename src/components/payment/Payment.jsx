import React from "react";
import Ripple from "../../assets/Ripple.jpeg";
import Wallet from "../../assets/wallet.jpeg";
import Mobile from "../../assets/mobile.jpeg";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment-Container">
      <h1 className="paymentTitle">Place an Order and Make Payments<br/> Using XRP</h1>
      <div className="paymentcard-Container">
        <div >
          <img src={Ripple} alt="ripple" />
          <p className="spun">
            Place an Order and Make Payments <br />
            Using XRP
          </p>
          <p className="step">
          Follow these steps to place an order and make secure<br/> payments using
            XRP
          </p>
          <NavLink to="/more" className="modify">
            Learn More <FaAngleRight />
          </NavLink>
        </div>
        <div className="realTime-card">
          <img src={Mobile} alt="mobile" />
          <p className="spun">
            Place an Order and Make Payments <br />
            Using XRP
          </p>
          <p className="step">
            Follow these steps to place an order and make secure<br/> payments using
            XRP
          </p>
          <NavLink to="/more" className="get">
            Connect Wallet <FaAngleRight />
          </NavLink>
        </div>
        <div className="realTime-card">
          <img src={Wallet} alt="wallet" />
          <p className="spun">
            Place an Order and Make Payments <br />
            Using XRP
          </p>
          <p className="step">
          Follow these steps to place an order and make secure<br/> payments using
            XRP
          </p>
          <NavLink to="/more" className="get">
            Get Started <FaAngleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Payment;
