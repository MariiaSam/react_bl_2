import { Component } from "react";
import styles from './main-menu.module.css'

class MainMenu extends Component {
    constructor(props) {}
      render() {
    
    return (
        <ul className={styles.menu}>
            <li>
                <a className={styles.link} href="#">Link1</a>
            </li>
            <li>
                <a className={styles.link} href="#">Link2</a>
            </li>
            <li>
                <a className={styles.link} href="#">Link3</a>
            </li>
        </ul>
        )

}
     
}

export default MainMenu