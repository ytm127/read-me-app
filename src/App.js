import React from "react";
import { NavBar } from "./components/NavBar";
import {SideBar} from "./components/SideBar"
import {MyBooks} from "./components/MyBooks"

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <NavBar />
      <div className="row" >
        <div className="col s2" style={{ background: "lightgrey", height: "100%", position:"fixed" }}>
          <SideBar/>
        </div>
        <div className="col s10 offset-s2" style={{background:"#f2f2f2", height:"100%", position:"fixed" }}>
          <MyBooks/>
        </div>
      </div>
    </div>
  );
}

export default App;
