import { ADD__PRODUCT, REMOVE__PRODUCT, CLEAR__CART } from "./actionTypes";

export const AddProduct = (productsCart) => ({
  type: ADD__PRODUCT,
  productsCart,
});
export const RemoveProduct = (productsCart) => ({
  type: REMOVE__PRODUCT,
  productsCart,
});
export const ClearCart = (cart) => ({
  type: CLEAR__CART,
  cart,
});