export const getAllBooks = (store) => store.books;

export const getFavoriteBooks = (store) => {
  return store.books.filter(({ favorite }) => favorite);
};

// export const getFilteredBooks = 

export const getFilter = store => store.filter;