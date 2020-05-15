import { combineReducers } from "redux";
import listReducer from "./listReducer";
import categoryReducer from "./categoryReducer";
import filter from "./filter";
import pagiReducer from "./pagiReducer";

export default combineReducers({
  listReducer,
  categoryReducer,
  filter,
  pagiReducer
})