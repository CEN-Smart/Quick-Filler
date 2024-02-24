import React from "react";
import cylinder from "../../assets/pngtree-storage-gas-cylinder-icon-png-image_4983070.png";

import "./Benefits.css"

function Benefits() {
  return (
    <div className="benefitContainer">
      <div className="benefitText">
        <p className="quick">Benefits</p>
        <p className="free">
          Experience the convenience and peace of mind with Quick Filler's
          cooking gas delivery service. Our top priority is your safety and
          reliability, ensuring that you have a seamless and hassle-free
          experience.
        </p>
      </div>
      <div >
        <img src={cylinder} alt="gas" className="benefitImage" />
      </div>
    </div>
  );
}

export default Benefits;
