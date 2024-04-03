import { createAction } from "@reduxjs/toolkit";

import {nanoid} from "nanoid";


export const addBook = createAction('books/addBook', data => {
    return {
        payload: {
        id: nanoid(),
        ...data,
        }
    }

})

// export const addBook = payload => {
//     return {
//         type: ADD_BOOK,
//         payload: {
//             id: nanoid(),
//             ...payload,
//         },
//     }
// }

export const deleteBook = createAction('books/deleteBook')

// export const deleteBook = payload => {
//     return {
//         type: DELETE_BOOK,
//         payload,
//     }
// }