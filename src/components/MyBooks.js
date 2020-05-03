import React from "react";
import { BookCard } from "./BookCard";

export const MyBooks = () => {
  return (
    <>
      <h2 style={{ color: "#454545" }}>
        <i
          className="material-icons left"
          style={{ fontSize: "inherit", color: "#454545" }}
        >
          book
        </i>
        MY LIBRARY
      </h2>

      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="autocomplete-input" className="autocomplete" />
              <label htmlFor="autocomplete-input">Search...</label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ overflow: "auto", height: "78vh" , paddingBottom:"5vh"}}>
        <div className="row">
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://images.squarespace-cdn.com/content/v1/545b5781e4b08f12642b8351/1480420244024-QSGGU9U3402X3Y5T8J32/ke17ZwdGBToddI8pDm48kONxCHWBzgtTUjtSD5mcWRgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdKLsPvJeQfyd_CzFOzmRb2HjUIFNfJ7dUTySQ5hYzJGUCgVrBvIFmmn3lNbY3sHXsA/image-asset.jpeg?format=1500w"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://img.apmcdn.org/653295861631c2b1de244cb2fd4cfe87d1976701/uncropped/cb7de8-20150304-catcherintherye.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://dennybradburybooks.files.wordpress.com/2011/05/the-witches.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://images-na.ssl-images-amazon.com/images/I/51aC4tiXgiL._SX309_BO1,204,203,200_.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://prodimage.images-bn.com/pimages/9780812984965_p0_v4_s1200x630.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s3">
          <BookCard />
          </div>
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://images-na.ssl-images-amazon.com/images/I/71BeTMKVjuL.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card">
              <div
                className="card-image waves-effect waves-block waves-light"
                style={{ maxHeight: "460px", minHeight:"460px" }}
              >
                <img
                  className="activator"
                  src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
