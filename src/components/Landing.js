import React from "react";
import picture from "../pic1.png";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Landing = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h1 style={{ color: "white", marginTop: "15vh" }}>
              Read.me makes it easy to track of all the books you read
            </h1>
            <div className="row">
              <div className="col">
                <a className="waves-effect waves-light btn btn-large">
                  Learn more
                </a>
              </div>
              <div className="col">
                <a className="waves-effect waves-light btn btn-large">
                  <FontAwesomeIcon icon={faBook} size="1x" />
                  &nbsp; Start reading
                </a>
              </div>
            </div>
          </div>
          <div className="col s6">
            <div>
              <img src={picture} alt="pic2" style={{ marginTop: "7vh" }} />
            </div>
          </div>
        </div>
      </div>
      {/* BELOW FOLD */}
      <div className="row">
        <div style={{ marginLeft: "4vw", marginRight: "4vw" }}>
          <div className="card" style={{ borderRadius: 10 }}>
            <div className="card-content" style={{ padding: "5vh" }}>
            <div className="row">
                
                <div className="col s4" style={{ textAlign: "center" }}>
                  <h5>Add your thoughts</h5>
                  <div
                    style={{ fontSize: 16, marginTop: "3vh", color: "#616161" }}
                  >
                    Add your thoughts and comments after, or while you're
                    reading the book. You can also your books for future
                    reference
                  </div>
                </div>
                <div className="col s4" style={{ textAlign: "center" }}>
                  <h5>Share with your friends</h5>
                  <div
                    style={{ fontSize: 16, marginTop: "3vh", color: "#616161" }}
                  >
                    Let your friends know what you're currently reading
                  </div>
                </div>
                <div className="col s4" style={{ textAlign: "center" }}>
                  <h5>Share with your friends</h5>
                  <div
                    style={{ fontSize: 16, marginTop: "3vh", color: "#616161" }}
                  >
                    Let your friends know what you're currently reading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom part */}
      <div className="row">

      </div>
    </div>
  );
};
