import { ADD_BOOK } from "./constans";

const initialState = {
  books: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      const { books } = state;
      return {
        books: [...books, payload],
      };
    default:
      return state;
  }
};

export default reducer;
