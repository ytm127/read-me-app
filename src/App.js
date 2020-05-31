import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { SignIn } from "./components/SignIn";
import { SideBar } from "./components/SideBar";
import { MyBooks } from "./components/MyBooks";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
function App() {
  const [loggedIn, setLoggedIn] =  React.useState(false)

  return (
    <div className="App" style={{ height: "100%" }}>
      <NavBar />
      <div className="row">
      {loggedIn ?  <div
          className="col s2"
          style={{ background: "lightgrey", height: "100%", position: "fixed" }}
        >
          <SideBar />
        </div> : <div/>}
        <div
          className={loggedIn ? "col s10 offset-s2" : "col 12"}
          style={{ background: "#f2f2f2", height: "100%", position: "fixed" }}
        >
          <Switch>
            <Route path="/" component={MyBooks} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/landing" component={Landing} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
