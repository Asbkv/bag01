import React from "react";
import "./ProductCard.scss";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ el }) => {
  const favorite = useSelector((s) => s.favorite);
  const dispatch = useDispatch();
  const successMessage = () => {
    toast.success(`Продукт успешно добавлен в корзину`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  function AddBasket(item) {
    dispatch({ type: "ADD_BASKET", payload: item });
    successMessage();
  }

  function AddFavorite(item) {
    dispatch({ type: "ADD_FAVORITE", payload: item });
  }
  const favoriteFind = favorite.some((f) => f._id === el._id);

  return (
    <div className="card" key={el._id}>
      <NavLink to={`/details/${el._id}`}>
        <img src={el.url} alt="img" />
      </NavLink>
      <div className="card__text">
        <h1>{el.name.slice(0, 10)}</h1>
        <h2>{el.price}$</h2>
        <h3>{el.category}</h3>
        <div className="card__text--icons">
          <a onClick={() => AddFavorite(el)}>
            {favoriteFind ? <FaHeart /> : <FaRegHeart />}
          </a>
          <a onClick={() => AddBasket(el)}>
            <FaCartArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
