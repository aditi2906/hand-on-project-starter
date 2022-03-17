import React from 'react';
import "./Navbar.css"
import logo from "../../utils/cuvette logo.png"
function Nav() {

  
  return (
  <>
   <div className="topnav">
  <img className="logo" src={logo}/>
  
  <div className="topnav-right">
    <a href="#search">My Apis</a>
    <a href="#about">My account</a>
    <button className="btn-use">Login/Signup</button>
  </div>
</div>
  </>
  );
}

export default Nav;