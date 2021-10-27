import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { allReducers } from "./videos/reducers";

const store = createStore( 
    allReducers, 
    applyMiddleware(thunk, logger) 
)

export default store;