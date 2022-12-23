
import user from "./reducers/userReducer";
import { createStore } from "redux";

const store = createStore(user);

export default store;