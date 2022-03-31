import { combineReducers } from "redux";
import { selectedUserReducer, UsersReducer } from "./userReducer";

// combine all the reducer
const reducers = combineReducers({
  allUsers: UsersReducer,
  user: selectedUserReducer,
});

export default reducers;
