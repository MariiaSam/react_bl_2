import { Component } from "react";

import PostsSeachForm from "./PostsSearchForm/PostsSearchForm";

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
  

    return (
      <>
      <PostsSeachForm/>
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
