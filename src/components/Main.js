import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { MyBooks } from "./MyBooks";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="row">
        <div
          className="col s2"
          style={{ background: "lightgrey", height: "100%", position: "fixed" }}
        >
          <SideBar />
        </div>
        <div
          className="col s10 offset-s2"
          style={{ background: "#f2f2f2", height: "100%", position: "fixed" }}
        >
          <MyBooks />
        </div>
      </div>
    </div>
  );
};

