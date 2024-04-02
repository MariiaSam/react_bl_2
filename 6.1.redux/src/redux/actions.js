import {nanoid} from 'nanoid'

import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "./constans";

export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload: {
    id: nanoid(),
    ...payload
    
    } 
  };
};


export const deleteBook = (payload) => {
  return {
    type: DELETE_BOOK,
    payload,
    } 
}

export const setFilter = payload => {

return {
  typoe: SET_FILTER,
  payload

}

}

