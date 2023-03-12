import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderD from '../components/headerDark'
import FooterD from '../components/footerDark'



const Info = () => {
  return (
    <>
      <HeaderD />
      <div className="main hhh">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <div className="box"></div>
      </div>
      <FooterD />
    </>
  );
}

export default Info;
