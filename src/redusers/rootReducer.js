
import { combineReducers } from "redux";
import { amountProductInCartReducer } from "./amountProductInCartReducer";
import { sortReducer } from "./sortReducer";
import { productsInCartReducer } from "./productsInCartReducer"


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
    amountProductsInCart: amountProductInCartReducer,
    productsInCart: productsInCartReducer,
});
