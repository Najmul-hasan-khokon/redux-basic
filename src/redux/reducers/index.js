import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productsReducers";

// combine all the reducer
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
