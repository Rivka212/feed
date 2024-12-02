import { legacy_createStore as createStore, combineReducers } from 'redux'

import { productReducer } from './reducers/product.reducer.js'

const rootReducer = combineReducers({
    productModule: productReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)