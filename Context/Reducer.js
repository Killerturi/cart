export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      cartData: [...state.cartData, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cartData: state.cartData.filter((val) => val.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    console.log(action.payload);
    return {
      ...state,
      cartData: state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty += 1) : item;
      }),
    };
  }
  if (action.type === "DECREASE") {
    return {
      ...state,
      cartData: state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty -= 1) : item;
      }),
    };
  }
};
