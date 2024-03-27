import styles from "./posts-search-list.module.css";

const PostsSearchList = ({ showModal, items }) => {
  const elements = items.map(({ id, title, body }) => (
    <li
      key={id}
      
      className={styles.item}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default PostsSearchList;
