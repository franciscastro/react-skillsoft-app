import React from 'react';
import logo from '../header-placeholder.png';


function Header() {

  return (
    <header>
      <img src={logo} id="logo" alt="placeholder header"/>
      <h1>
        <a href="index.html">Skillsoft tracker</a>
      </h1>
    </header>
  );

}


export default Header;
