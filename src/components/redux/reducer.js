const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  dark: true,
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
      }
      return state;
    case "DELETE_BASKET":
      let filter = state.basket.filter((el) => el._id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(filter));
      return { state, basket: filter };
    case "INCREMENT_QUANTITY":
      return state;
    case "DECREMENT_QUANTITY":
      return state;
    case "DARK_WHITE":
      return { ...state, dark: (state.dark = true) };
    case "DARK_BLACK":
      return { ...state, dark: (state.dark = false) };

    default:
      return state;
  }
};
