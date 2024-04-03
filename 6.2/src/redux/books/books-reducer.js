// import { ADD_BOOK, DELETE_BOOK } from "./books-constants";
import { createReducer } from "@reduxjs/toolkit";

import { deleteBook, addBook } from "./books-actions";

const initialState = [];

const booksReducer = createReducer(initialState, builder => {

    builder
    .addCase(addBook, (state, {payload}) => {
        state.push(payload)
    
    }) //[...state, payload])
    .addCase(deleteBook, (state, {payload}) => state.filter((item) => item.id !== payload))

})

// const booksReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addBook.type:
//       return [...state, payload];

//     case deleteBook.type:
//       return state.filter((item) => item.id !== payload);

//     default:
//       return state;
//   }
// };

export default booksReducer;
