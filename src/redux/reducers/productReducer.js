
//   Reducer is the Pure Function that Accepts the Current State and Action as the Arugemnts and returns the New State.

import { ActionTypes } from "../contans/action_types";



const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};