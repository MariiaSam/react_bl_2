import { Component } from "react";

import styles from './posts.module.css'

class Posts extends Component {
    state = {
        posts: []
    }

    render() {

        const {posts} = this.state
        const elements = posts.map(({ id, title, body }) => (<li key={id} className={styles.item}>
            <h3>{title}</h3>
            <p>{body}</p>
        </li>));

        return(
            <ul className={styles.list}>
                {elements}
            </ul>
            )
    
    }

}

export default Posts