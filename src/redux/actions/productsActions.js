import { ActionTypes } from "../constants/action-types";

/**
 * etai hocce amar dispatch function . ekhan thekei ami reducer function e action
 * pathabo. obossoi jekhane ei function call korbo arguement akare
 * products pathabo.
 */

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payLoad: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payLoad: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
