redux-thunk hocce middleware function. jokhon side effect niye kaj korbo tokhon eta use korbo.
middleware ekta function return kore.
jei function ta aeguement akare dispatch ney
action creator er modde asynchronous operation korte middleware help kore.
// store e middleware setup korte hobe.



// for example
 export const fetchUsers = () => {
   return async (dispatch) => {
     const response = await axios.get(
       " https://jsonplaceholder.typicode.com/users"
     );

     dispatch({ type: ActionTypes.SET_USERS, payLoad: response.data });
   };
};





// store setup for middleware thunk
     ApplyMiddleware(thunk)  // ei 2ta jinis use korte hobe.


import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
