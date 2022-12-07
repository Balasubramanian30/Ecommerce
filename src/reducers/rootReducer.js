import { combineReducers, CombineReducers } from "redux";

import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";



const rootReducer = combineReducers(
    {
        itemsReducer : itemsReducer,
        cartReducer:cartReducer
    }


)

export default rootReducer