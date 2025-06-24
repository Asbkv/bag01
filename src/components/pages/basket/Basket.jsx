import React from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import { GoTrash } from "react-icons/go";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Basket = () => {
  const basket = useSelector((s) => s.basket);

  const dispatch = useDispatch();

  function deleteBasket(id) {
    dispatch({ type: "DELETE_BASKET", payload: id });
  }
  function increment(id) {
    dispatch({type: "INCREMENT_QUANTITY", payload: id})
  }

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.length ? (
            basket.map((el) => (
              <div className="basket--card" key={el.id}>
                <Zoom>
                  <img src={el.url} alt="img" width={100} />
                </Zoom>
                <div className="basket--card__info">
                  <h1>{el.name}</h1>
                  <h2>{el.price}$</h2>
                </div>
                <div className="basket--card__count">
                  <button onClick={() => increment(el._id)} >-</button>
                  <h5>{el.quantity}</h5>
                  <button>+</button>
                </div>
                <button
                  onClick={() => deleteBasket(el._id)}
                  className="basket--card__delete"
                >
                  <GoTrash />
                </button>
              </div>
            ))
          ) : (
            <center>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png"
                alt="img"
              />
            </center>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
