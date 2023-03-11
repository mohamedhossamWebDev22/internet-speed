import React from 'react';

import img1 from'../assets/img1.png';

const Header = () => {
  return (
    <>
      <div className="title">
        <img src={img1}/>
        <h1>Internet Speed</h1>
      </div>
    </>
  );
}

export default Header;
