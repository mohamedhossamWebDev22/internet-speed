import React from "react";
import ReactDOM from 'react-dom/client';
import { NavLink } from "react-router-dom";

import HeaderD from "../components/headerDark";
import FooterD from "../components/footerDark";

import img2 from "../assets/img2.png";

function getSpeed(){
  ReactDOM.render(<p>Hello</p>, document.getElementById('speed'));
}

const Speed = () => {
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

          <p id="speed">Your Speed Is:{navigator.connection.downlink}Mb/s</p>

          <br />

          <button
            className="link2"
            onClick={function () {
              window.location.href = 'https://internet-speed11.netlify.app/';
            }}
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
