import React from "react";
import picture from "../pic1.png";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Landing = () => {
  return (
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
                &nbsp;  Start reading
              </a>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div>
            <img src={picture} alt="pic2" style={{ marginTop: "16vh" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
