import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "./constans";

const initialState = {
  books: [],
  filter: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      const { books } = state;
      return {
        ...state,
        books: [...books, payload],
      };

    case DELETE_BOOK:
      const newBooks = state.books.filter((item) => item.id !== payload);
      return {
        ...state,
        books: newBooks,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

export default reducer;
