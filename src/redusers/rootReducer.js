
import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";
import { productsInCartReducer } from "./productsInCartReducer"
import { loginReducer } from "./loginReducer"
import { resetPasswordReducer } from "./resetPasswordReducer"


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
    productsInCart: productsInCartReducer,
    loginForm: loginReducer,
    resetPassword: resetPasswordReducer,
});
