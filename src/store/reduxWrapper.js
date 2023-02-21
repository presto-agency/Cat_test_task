import * as React from "react"
import {applyMiddleware, combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
  assets: productReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default ({ element }) => <Provider store={store}>{element}</Provider>


