import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderD from "../components/headerDark";
import FooterD from "../components/footerDark";

import error1 from "../assets/error1.png";

const ErrorF = () => {
  return (
    <>
      <HeaderD />

      <div className="hhh main">
        <h1>Page not Found</h1>
        
        <img src={error1} alt="error" />

        <br />
        <br />

        <NavLink to="/" className="link">
          Home
        </NavLink>
      </div>

      <FooterD />
    </>
  );
}

export default ErrorF;
