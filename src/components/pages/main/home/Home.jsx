import React from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
const Home = () => {
  const product = useSelector((s) => s.product);
  const lastProduct = product[product.length - 1];

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {lastProduct && (
            <div className="home--product">
              <img src={lastProduct.url} alt="img"  />
              <div className="home--product__text">
                <h1>{lastProduct.name}</h1>
                <h2>{lastProduct.price}$</h2>
                <h3>{lastProduct.category}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
