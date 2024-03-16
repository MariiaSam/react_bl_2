import { Component } from "react";
import styles from './posts-search-form.module.css'

class PostsSeachForm extends Component {
    render( ) {
    
    return (
        <form  className={styles.form}>
           <div className={styles.fieldGroup}>
            <label>Enter Search</label>
             <input type="text"  placeholder="Enter Search"/> </div> 
            <button type='submit'>Search</button>
        </form>
        )
    }

}

export default PostsSeachForm