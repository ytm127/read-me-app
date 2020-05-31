import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { SignIn } from "./components/SignIn";
import { SideBar } from "./components/SideBar";
import { MyBooks } from "./components/MyBooks";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
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
          <Switch>
            <Route path="/" component={MyBooks} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/sign-in" component={SignIn} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
