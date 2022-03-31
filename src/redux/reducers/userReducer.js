import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

// server theke data niye dispatch call kore product ba user state e rakbo
// then return kore dibo.

export const UsersReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payLoad };

    default:
      return state;
  }
};

// single product ba user call kore state e rekhe then details page e show korbo.
// second case diye details page theke back e asle component unmount kore dibo.
export const selectedUserReducer = (state = {}, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, user: payLoad };

    // component unmount hole state clean kore dibo
    case ActionTypes.REMOVE_USER:
      return [];

    default:
      return state;
  }
};
