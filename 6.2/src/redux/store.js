import { configureStore} from '@reduxjs/toolkit'

import rootReducer from "./rootReducer";

import booksReducer from './books/books-reducer';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer}
});
/*
const createStore = (reducer, initialState) {
    if(initialState) {
        return reducer(initialState)
    }
    return reducer()
}
*/

export default store;