
import { combineReducers } from "redux";
import { amountProductInCartReducer } from "./amountProductInCartReducer";
import { sortReducer } from "./sortReducer";
import { productsInCartReducer } from "./productsInCartReducer"
import { loginReducer } from "./loginReducer"
import { resetPasswordReducer } from "./resetPasswordReducer"


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
    amountProductsInCart: amountProductInCartReducer,
    productsInCart: productsInCartReducer,
    loginForm: loginReducer,
    resetPassword: resetPasswordReducer,
});
