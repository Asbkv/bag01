import React from "react";
import "./Category.scss";
import Product from "../../product/Product";
import bag from "../../../../assets/images/bag-images.png";

const Category = () => {
  return (
    <section>
      <div id="category">
        <div className="container">
          <div className="category">
            <div className="category--card">
              <Product />
            </div>
          </div>
        </div>
      </div>

      <div id="bag">
        <div className="container">
          <div className="bag">
            <img src={bag} alt="img" />
            <div className="bag--text">
              <h3>{"Creative bag only for you.".toUpperCase()}</h3>
              <h1>
                {"Lorem ipsum dolor sit amet"
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                <br />
                {"consectetur adipiscing elit"
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                <br />
                {"sed do eiusmod."
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h1>

              <p className="capitalize-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam.
              </p>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
