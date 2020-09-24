import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {

  return (
    <nav>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/enterweight">enter weight</Link></li>
        <li><Link to="/myweights">my weight</Link></li>
        <li><Link to="/teamweights">team weights</Link></li>
      </ul>
    </nav>
  );

}


export default Menu;
