import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import itemReducer from "./item/item.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  item: itemReducer,
});
