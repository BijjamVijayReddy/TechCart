import { ActionTypes } from "../contans/action_types"



//   SET_PRODUCTS Action
export const setProducts = (products) => {

    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }

}

// SELECTED_PRODUCT;

export const selectedProduct = (product) => {

    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }

}

//  REMOVE_PRODUCTS 

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_PRODUCT,
    };
  };