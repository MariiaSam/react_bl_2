// import useLang from "../../hooks/useLang";

import LanguageSwitcher from "../LanguageSwitcher";

import styles from "./Navbar.module.css";

import locale from "./locale.json";

const Navbar = ({lang, toggleLang})=> {
    // const {lang} = useLang();

    const menuTitle = locale.menu[lang];
// 
    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{menuTitle}</div>
            <LanguageSwitcher toggleLang={toggleLang} lang={lang} />
        </nav>
    )
}

export default Navbar;