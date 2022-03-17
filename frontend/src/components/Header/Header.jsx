import React from "react";
import "./Header.css"
import Dp from "../../utils/app dp.svg"


function Header() {
  return (
    <div className="divone">
<img alt="app dp" className="apppic" src={Dp} />
<div className="semicircle" />
<div className="bannercontent">
<h2 className="Appnamebanner">BACKGROUND IMAGE REMOVER</h2>
<p className="bannerdescription">100% automatic and free</p>
</div>
  <button className="viewappbutton" type="button" name="button">View app</button>
</div>
  );
}

export default Header;