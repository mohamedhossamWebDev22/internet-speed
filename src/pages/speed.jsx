import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderD from '../components/headerDark'
import FooterD from '../components/footerDark'


const Speed = () => {
  return (
    <>
      <HeaderD />
      <div className="mainSpeed hhh">
        <NavLink to='/'>Home</NavLink>
      </div>
      <FooterD />
    </>
  );
}

export default Speed;
