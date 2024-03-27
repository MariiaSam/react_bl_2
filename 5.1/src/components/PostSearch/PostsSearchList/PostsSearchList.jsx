import { Link } from 'react-router-dom'

import styles from "./posts-search-list.module.css";

const PostsSearchList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li
      key={id}
      
      className={styles.item}
    >
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default PostsSearchList;
