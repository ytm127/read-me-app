import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [loggedIn, setLoggedIn] =  React.useState(false)
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to={loggedIn ? `/` : "/landing"} className="brand-logo" style={{ paddingLeft: 20 }}>
            Read.Me
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Modal />
            </li>
            <li>
              <Link to="/sign-in">Sign in </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
