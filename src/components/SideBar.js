import React, { useState } from "react";
import Modal from "./Modal";

export const SideBar = () => {
  const [activePage, setActivePage] = useState("myBooks");

  const handleClick = props => {
    console.log({ props });
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <img
          src="https://avatars3.githubusercontent.com/u/1071625?s=400&u=f19e921ec34fc145d2b0b05f6cdd3472240c885b&v=4"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <br />
      <div>

      </div>
      <br />
      <div className="collection">
        <a
          href="#!"
          className={`collection-item ${activePage === "myBooks" && `active`}`}
          id="myBooks"
          onClick={handleClick}
        >
          My Library
        </a>
        <a
          href="#!"
          className={`collection-item ${activePage === "profile" && `active`}`}
          onClick={handleClick}
        >
          Profile
        </a>
      </div>
    </>
  );
};
