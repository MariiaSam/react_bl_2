import styles from './my-book-list.module.css'

const MyBookList = () => {
    return (
        <div className={styles.wrapper}>
        <ol>
            <li>
                Author: Mariia Samodurova. Title: "Posh"
            </li>
            <li>
                Author: Lev Ponochovniy. Title: "Winner"
            </li>
        </ol>
        </div>
        )

}

export default MyBookList