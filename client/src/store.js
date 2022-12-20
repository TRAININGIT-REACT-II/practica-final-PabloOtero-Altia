import { configureStore } from '@reduxjs/toolkit'

import user from "./reducers/userReducer";
import nota from "./reducers/notaReducer";


const store = configureStore(combineReducers({
    user,
    nota
}));

export default store;