import { Component } from "react";
import { nanoid } from "nanoid";

import MyBookList from "./MyBookList/MyBookList";
import MyBooksForm from "./MyBooksForm/MyBooksForm";

import styles from "./my-books.module.css";

class MyBooks extends Component {
  state = {
    books: [
      {
        id: nanoid(),
        title: "Alex",
        author: "Oleg",
      },
    ],
  };

  addBook = (data) => {
    this.setState (( {books}) => {
     const newBook = {
        id: nanoid(),
        ...data,
    }
    return {book: [...books, newBook]} // ... book - старі книги, до яких додаю нову 
    })
}; //books - prevState

  render() {
    const { books } = this.state;
    const { addBook } = this.setState;

    return (
      <div className={styles.wrapper}>
        <MyBooksForm onSubmit={addBook} />
        <MyBookList items={books} />
      </div>
    );
  }
}

export default MyBooks;
