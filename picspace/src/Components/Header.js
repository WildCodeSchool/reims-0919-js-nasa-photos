import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <div className="Header">
      <div className="titleLogo">
      <div className="titre">PicSpace</div>
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
      </div>
        <div className="HeaderLinks">
          <div className="Headerlink"><Link className="link" to="/">Home</Link></div>
          <div className="Headerlink"><Link className="link" to="/Basket">My selection</Link></div>
        </div>
    </div>

  )
}

export default Header;