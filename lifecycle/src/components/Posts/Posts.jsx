import { Component } from "react";
import axios from "axios";

import styles from "./posts.module.css";

class Posts extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      if (data?.length) {
        this.setState({
          loading: false,
          posts: data?.length ? data : [],
        });
      }
    });
  }

  render() {
    // const postsRequest = axios('https://jsonplaceholder.typicode.com/posts') поверне проміс, а не розмітку
    const { posts, loading } = this.state;
    const elements = posts.map(({ id, title, body }) => (
      <li key={id} className={styles.item}>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    ));

    return (
      <>
        {loading && <p>...Loading</p>}
        {Boolean(elements.length) && (
          <ul className={styles.list}>{elements}</ul>
        )}
      </>
    );
  }
}

export default Posts;
