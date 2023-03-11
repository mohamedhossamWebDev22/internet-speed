import React from 'react';
import { NavLink } from "react-router-dom";

import Header from '../components/header'
import Footer from '../components/footer'

import image2 from '../assets/img2.png';
import image3 from '../assets/img1.png';

const Home = () => {
  return (
    <>
      <Header />
      <div className="mainC hhh">
        <h1>You can:</h1>

        <div className="card-brd">
          <div className="card">
            <img src={image2}/>
            <p>Get Internet Speed</p>
            <NavLink to='/speed'className='link'>Go</NavLink>
          </div>
          <div className="card">
            <img src={image3}/>
            <p>Get WIFI Info</p>

            <NavLink to='/info'className='link'>Go</NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
