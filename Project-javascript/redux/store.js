import * as redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";
import CounterReducer from "./reducer/counter.js";
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
const rootReducer = combineReducers({ couter: CounterReducer });
const store = createStore(rootReducer);

export default store;
