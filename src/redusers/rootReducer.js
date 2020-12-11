
import { combineReducers } from "redux";
import { amountProductInCartReducer } from "./amountProductInCartReducer";
import { sortReducer } from "./sortReducer";


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
    amountProductsInCart: amountProductInCartReducer,
});
