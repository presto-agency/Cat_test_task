import * as React from "react"
import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux"

const rootReducer = combineReducers({
  assets: ProductReducer,
})

const store = createStore(rootReducer, composeWithDevTools())
export const ReduxWrapper =  ({ element }) => <Provider store={store}>{element}</Provider>


