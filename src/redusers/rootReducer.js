
import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
});
