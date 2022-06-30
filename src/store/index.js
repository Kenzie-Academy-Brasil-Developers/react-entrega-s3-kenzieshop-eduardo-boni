import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import itensReducer from "./modules/Cart/reducers";

const reducers = combineReducers({ itens: itensReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;