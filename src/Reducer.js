export const InitialState = {
  cart: [],
  searchkey: "",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === action.payload.id
              ? {
                  ...i,
                  quantity: i.quantity + 1,
                }
              : i
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };
      break;
    case "SEARCH":
      return {
        ...state,
        searchkey: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
