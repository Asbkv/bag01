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
  function increment(item) {
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  }
  function decrement(item) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  }

  let totalSum = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block">
            {basket.length ? (
              basket.map((el) => (
                <div className="basket--block__card" key={el._id}>
                  <Zoom>
                    <img src={el.url} alt="img" width={100} />
                  </Zoom>
                  <div className="basket--block__card--info">
                    <h1>{el.name}</h1>
                    <h2>{el.price * el.quantity}$</h2>
                  </div>
                  <div className="basket--block__card--count">
                    <button onClick={() => decrement(el)}>-</button>
                    <h5>{el.quantity}</h5>
                    <button onClick={() => increment(el)}>+</button>
                  </div>
                  <button
                    onClick={() => deleteBasket(el._id)}
                    className="basket--block__card--delete"
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
          {/* <div className="basket--total">
            {basket.length > 0 && (
              <h3 className="basket--total">
                Итого: {totalSum.toFixed(2)} $
              </h3>
            )}
          </div> */}
          <div className="basket--total">
            {basket.length > 0 && (
              <h3 className="basket--total__heading">
                Итого: <span>{totalSum.toFixed(2)}</span> $
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
