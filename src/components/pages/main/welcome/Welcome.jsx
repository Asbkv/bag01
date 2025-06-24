import React from "react";
import "./Welcome.scss";
import welImg from "../../../../assets/images/welcome.png"

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <div className="welcome">
          <div className="welcome--content">
            <h3>Look Stylish Be Stylish.</h3>
            <h1>
              Look Stylish <br /> Be <span>Stylish.</span>
            </h1>
            <p>
              Before starting this business you should have ideas <br /> about
              the market and products to Compete with the <br /> Existing
              Businesses.
            </p>
            <button>join shop</button>
          </div>
          <img src={welImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
