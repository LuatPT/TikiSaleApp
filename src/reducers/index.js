import { combineReducers } from "redux";
import listReducer from "./listReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  listReducer,
  categoryReducer
})