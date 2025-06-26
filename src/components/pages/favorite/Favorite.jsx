import React from "react";
import "./Favorite.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Favorite = () => {
  const favorite = useSelector((s) => s.favorite);
  const dispatch = useDispatch();

  function deleteFavorite(item) {
    dispatch({ type: "DELETE_FAVORITE", payload: item });
    toast.info("🦄 Успешно удалено!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {favorite.length ? (
            favorite.map((el) => (
              <div className="favorite--card" key={el._id}>
                <img src={el.url} alt="img" width={200} />
                <div className="favorite--card__text">
                  <h2>{el.name.slice(0,10)}</h2>
                  <h2>{el.price}</h2>
                  <h3>{el.category}</h3>

                  <a onClick={() => deleteFavorite(el._id)}>
                    <MdDelete />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <center>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-illustration-download-in-svg-png-gif-file-formats--is-no-items-with-products-favorites-list-ecommerce-states-pack-e-commerce-shopping-illustrations-9741045.png"
                alt="img"
                width={500}
              />
            </center>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
