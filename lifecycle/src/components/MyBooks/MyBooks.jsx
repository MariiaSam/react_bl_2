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
    filter: '',
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

  deleteBook = (id) => {
    this.setState(({ books }) => {
      const newBooks = books.filter((item) => item.id !== id);

      return {
        books: newBooks,
      };
    });
  };

  changeFitler = ({target})=> {
    // console.log(target)
    this.setState({
        filter: target.value
    })
}

getFilteredBooks() {
    const {filter, books} = this.state;
    if(!filter) {
        return books;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredBooks = books.filter(({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
    });

    return filteredBooks;
}

  render() {
    const { addBook, deleteBook, changeFitler } = this;
    const books = this.getFilteredBooks();


    return (
      <div className={styles.wrapper}>
        <MyBooksForm onSubmit={addBook} />
        <div className={styles.listWrapper}>
        <input onChange={changeFitler} name="filter" placeholder="Search" />

                    <MyBookList items={books} deleteBook={deleteBook} />

        </div>
      </div>
    );
  }
}

export default MyBooks;
