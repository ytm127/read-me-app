import React from "react";
import Modal from "./Modal";

export const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo" style={{paddingLeft: 20}}>
            Read.Me
          </a>
          <ul className="right hide-on-med-and-down">
          <li><Modal/></li>
            <li>
              <a href="badges.html">Sign Out</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
