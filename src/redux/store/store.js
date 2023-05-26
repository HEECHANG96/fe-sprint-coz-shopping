import { createStore } from "redux";
import bookmarkReducer from "../reducers/bookmarkReducer";

const store = createStore(bookmarkReducer);

export default store;
