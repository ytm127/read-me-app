import React from "react";
import picture from "../pic1.png";

export const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h1 style={{ color: "white", marginTop: "15vh" }}>
            Read.me makes it easy to track of all the books you read{" "}
          </h1>
        </div>
        <div className="col s6">
          <div>
            <img src={picture} alt="pic2" style={{marginTop:"16vh"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};
