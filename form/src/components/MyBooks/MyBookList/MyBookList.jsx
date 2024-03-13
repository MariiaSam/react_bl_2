import styles from "./my-book-list.module.css";

const MyBookList = ({items}) => {
    const elements = items.map(({id, title, author})=> 
    <li key={id}>Author: {author}. Title: {title}</li>
  );

  return (
    <div className={styles.wrapper}>
      <ol>
            {elements}
      </ol>
    </div>
  );
};

export default MyBookList;
