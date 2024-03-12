import { Component } from "react";
import { nanoid} from 'nanoid'

import styles from './my-books-form.module.css'

class MyBooksForm extends Component {
    render () {
    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="book-title" className={styles.label}>Book Title</label>
                <input id="book-title" placeholder="Book title"/>
            </div>

              <div className={styles.formGroup}>
                <label htmlFor="book-author" className={styles.label}>Book author</label>
                <input id="book-author" placeholder="Book author"/>
            </div>
        <button type='submit'>Add book</button>
        </form>
        )
    }
}

export default MyBooksForm