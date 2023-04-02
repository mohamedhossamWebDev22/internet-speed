import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";

import HeaderD from "../components/headerDark";
import FooterD from "../components/footerDark";

import img2 from "../assets/img2.png";

const Speed = () => {
  const [speed, setspeed] = useState("Click The Button");

  return (
    <>
      <HeaderD />
      <div className="main hhh">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <div className="get">
          <img src={img2} />

          <br />

          <p id="speed">{speed}</p>

          <br />

          <button
            className="link2"
            onClick={() => setspeed(
              "You'r speed is " + navigator.connection.downlink + " Mb/s"
            )}
          >
            Go
          </button>
        </div>
      </div>
      <FooterD />
    </>
  );
};

export default Speed;
