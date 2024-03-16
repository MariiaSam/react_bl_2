import { Component } from "react";

import { getAllPosts } from "../../api/posts";
import styles from './posts-search.module.css'
class PostsSearch extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

 


  render() {
    const { posts, loading, error } = this.state;
    const elements = posts.map(({ id, title, body }) => (
      <li key={id} className={styles.item}>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    ));

    return (
      <>
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(elements.length) && (
          <ul className={styles.list}>{elements}</ul>
        )}
      </>
    );
  }
}

export default PostsSearch;
