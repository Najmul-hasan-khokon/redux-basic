import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

// server theke data niye dispatch call kore product ba user state e rakbo
// then return kore dibo.

export const productReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payLoad };

    default:
      return state;
  }
};

// single product ba user call kore state e rekhe then details page e show korbo.
// second case diye details page theke back e asle component unmount kore dibo.
export const selectedProductReducer = (state = {}, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payLoad };

    // component unmount hole state clean kore dibo
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return [];

    default:
      return state;
  }
};
