import {nanoid} from 'nanoid'

import { ADD_BOOK } from "./constans";

const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};
