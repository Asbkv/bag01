import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductCard from "../../ui/productCard/ProductCard";

const Product = () => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const [find, setFind] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      `https://api-crud.elcho.dev/api/v1/11d9b-bcdb1-01943/bagProduct`
    );
    const { data } = res.data;
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
    setFind(data);
  };

  function getFind(el) {
    if (el === "expensive") {
      const sorted = [...product].sort((a, b) => b.price - a.price);
      setFind(sorted);
    } else if (el === "cheap") {
      const sorted = [...product].sort((a, b) => a.price - b.price);
      setFind(sorted);
    } else {
      setFind(product);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="product">
      <div className="container">
        <select
          onChange={(e) => getFind(e.target.value)}
          defaultValue=""
          style={{
            fontSize: "23px",
            border: "none",
            padding: "10px",
            marginBottom: "30px",
            borderRadius: "10px",
          }}
        >
          <option value="">All</option>
          <option value="expensive">Expensive</option>
          <option value="cheap">Cheap</option>
        </select>
        <div className="product">
          {find?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
