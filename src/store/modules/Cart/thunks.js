import { ADD__PRODUCT, REMOVE__PRODUCT, CLEAR__CART } from "./actionTypes";

const inicialState = {
  productsCart: [],
  status: false,
};
const cartReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD__PRODUCT:
      return { ...action.productsCart, status: true };
    case REMOVE__PRODUCT:
      return { ...action.productsCart, status: true };
    case CLEAR__CART:
      return action.cart;
    default:
      return state;
  }
};
export default cartReducer;