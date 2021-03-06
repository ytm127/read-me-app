import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import {  AmplifySignOut } from '@aws-amplify/ui-react';

export const NavBar = () => {
  const [loggedIn, setLoggedIn] =  React.useState(true)
  return (
    <div className="navbar-fixed">
      <nav style={{background:'white'}}>
        <div className="nav-wrapper">
          <Link to={loggedIn ? `/` : "/landing"} className="brand-logo" style={{ paddingLeft: 20, color:"grey" }}>
            Read.Me
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Modal />
            </li>
            <li style={{background:"lightgrey"}}>
              {loggedIn ? <AmplifySignOut style={{background:"lightgrey"}}/> : <Link to="/sign-in">Sign in </Link>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
