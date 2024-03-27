import styles from './main-manu.module.css'
import { NavLink } from "react-router-dom";


const MainMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink  className={styles.link} to='/'> Home page9999</NavLink>
            </li>

            <li>
                <NavLink className={styles.link} to='/posts-search'>Posts Search</NavLink>
            </li>

            <li>
                <NavLink className={styles.link} to='/contacts'>Contacts</NavLink>
            </li>
        </ul>
        
        ) 

}

export default MainMenu