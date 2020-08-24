import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

// import inventorySaga from "./inventory/sagas";
import { InventoryReducer } from "../reducers/reducer-inv";
import { InventoryState } from "../types/types-inv";

// import cartSaga from "./cart/sagas";
import { cartReducer } from "../reducers/reducer-cart";
import { cartState } from "../types/types-cart";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  cart: cartState;
  inventory: InventoryState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: cartReducer,
    inventory: InventoryReducer,
    router: connectRouter(history)
  });
