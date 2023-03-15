import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderD from "../components/headerDark";
import FooterD from "../components/footerDark";

import {img5} from "../assets/error.png";

const ErrorF = () => {
  return (
    <>
      <HeaderD />

      <div className="hhh main">
        <h1>Page not Found</h1>
        
        <img src={img5} alt="error" />
      </div>

      <FooterD />
    </>
  );
}

export default ErrorF;
