import React, { useEffect } from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductCard from "../../ui/productCard/ProductCard";

const Product = () => {
  const product = useSelector((state) => state.product);
  console.log(product);

  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await axios.get(
      `https://api-crud.elcho.dev/api/v1/11d9b-bcdb1-01943/bagProduct`
    );
    dispatch({ type: "GET_PRODUCTS", payload: res.data.data });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="product">
          {product.map((el) => (
          <ProductCard el={el} key={el._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;



