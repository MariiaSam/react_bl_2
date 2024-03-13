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

  isDublicate({ title, author }) {
    const { books } = this.state;
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const dublicate = books.find((item) => {
      const normalizedCurrentTitle = item.title.toLowerCase();
      const normalizedCurrentAuthor = item.author.toLowerCase();
      return (
        normalizedCurrentTitle === normalizedTitle &&
        normalizedCurrentAuthor === normalizedAuthor
      );
    });

    return Boolean(dublicate);
  }

  addBook = (data) => {
    if (this.isDublicate(data)) {
      return alert(
        `Book with ${data.title} and ${data.author} already in list`
      );
    }

    this.setState(({ books }) => {
      const newBook = {
        id: nanoid(),
        ...data,
      };

      return {
        books: [...books, newBook],
      };
    });
    // ... book - старі книги, до яких додаю нову
  }; //books - prevState

  render() {
    const { books } = this.state;
    const { addBook } = this;

    return (
      <div className={styles.wrapper}>
        <MyBooksForm onSubmit={addBook} />
        <MyBookList items={books} />
      </div>
    );
  }
}

export default MyBooks;
