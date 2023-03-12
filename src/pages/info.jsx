import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderD from '../components/headerDark'
import FooterD from '../components/footerDark'

function help() {
  alert("Try Use Another Browser Like Chrome");
}

const Info = () => {
  return (
    <>
      <HeaderD />
      <div className="main hhh">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <div className="box">
          <h3>Network Type :
            <a className='light'> {navigator.connection.type}</a>
          </h3>
          <h3>Effective Network Type :
            <a className='light'> {navigator.connection.effectiveType}</a>
          </h3>
          <h3>Max Speed :
            <a className='light'> {navigator.connection.downlinkMax}</a>
          </h3>
          <h3>Round-Trip Time :
            <a className='light'> {navigator.connection.rtt} ms</a>
          </h3>
        </div>

        <button className="help" onClick={function(){help()}}>Need Help?(CLick Me!)</button>
      </div>
      <FooterD />
    </>
  );
}

export default Info;
