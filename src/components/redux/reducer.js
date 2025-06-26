const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  dark: true,
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const updated = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(updated));
      return { ...state, product: updated };
    case "GET_PRODUCTS":
      return { ...state, product: action.payload };
    case "ADD_BASKET":
      let res = state.basket.find((el) => el._id === action.payload._id);
      if (!res) {
        let changeAction = { ...action.payload, quantity: 1 };
        let result = [...state.basket, changeAction];
        localStorage.setItem("basket", JSON.stringify(result));
        return { ...state, basket: result };
      } else {
        let changeProduct = state.basket.map((el) =>
          el._id === action.payload._id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        localStorage.setItem("basket", JSON.stringify(changeProduct));
        return { ...state, basket: changeProduct };
      }
    case "DELETE_BASKET":
      let filter = state.basket.filter((el) => el._id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(filter));
      return { ...state, basket: filter };
    case "INCREMENT_QUANTITY":
      let increment = state.basket.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(increment));
      return { ...state, basket: increment };
    case "DECREMENT_QUANTITY":
      let decrement = state.basket.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(decrement));
      return { ...state, basket: decrement };
    case "ADD_FAVORITE":
      let heart = state.favorite.find((el) => el._id === action.payload._id);
      if (!heart) {
        let result = [...state.favorite, action.payload];
        localStorage.setItem("favorite", JSON.stringify(result));
        return { ...state, favorite: result };
      }

    case "DELETE_FAVORITE":
      let delFavorite = state.favorite.filter(
        (el) => el._id !== action.payload
      );
      localStorage.setItem("favorite", JSON.stringify(delFavorite));
      return { ...state, favorite: delFavorite };

    case "DARK_WHITE":
      return { ...state, dark: (state.dark = true) };
    case "DARK_BLACK":
      return { ...state, dark: (state.dark = false) };

    default:
      return state;
  }
};
