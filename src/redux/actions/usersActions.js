import axios from "axios";
import { ActionTypes } from "../constants/action-types";

/**
 * etai hocce amar dispatch function . ekhan thekei ami reducer function e action
 * pathabo. obossoi jekhane ei function call korbo arguement akare
 * products pathabo.
 */

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(
      " https://jsonplaceholder.typicode.com/users"
    );

    dispatch({ type: ActionTypes.SET_USERS, payLoad: response.data });
  };
};

// ei pattern eo kora jay ekta function arekta function ke return korce.
export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  dispatch({ type: ActionTypes.SELECTED_USER, payLoad: response.data });
};

// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payLoad: products,
//   };
// };

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};
