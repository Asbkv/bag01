import React from "react";
import "./ProductCard.scss";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { useDispatch,  } from "react-redux";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  function AddBasket(item) {
    dispatch({ type: "ADD_BASKET", payload: item });
  }

  return (
        <div className="card" key={el._id} >
          <NavLink to={`/details/${el._id}`}>
            <img src={el.url} alt="img" />
          </NavLink>
          <div className="card__text">
            <h1>{el.name}</h1>
            <h2>{el.price}$</h2>
            <h3>{el.category}</h3>
            <div className="card__text--icons">
              <a href="#">
                <FaHeart />
              </a>
              <a onClick={() => AddBasket(el)} href="#">
                <FaCartArrowDown />
              </a>
            </div>
          </div>
        </div>
  );
};

export default ProductCard;
