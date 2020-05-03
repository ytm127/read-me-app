import React, { useState } from "react";

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
        <a
          className="waves-effect waves-light btn teal accent-4"
          style={{ width: "-webkit-fill-available" }}
        >
          <i className="material-icons left">library_add</i>Add a Book
        </a>
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
