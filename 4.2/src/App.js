
import { useState } from 'react';

import Navbar from './modules/Navbar/Navbar';
import Main from "./modules/Main/Main";
import Footer from './modules/Footer/Footer';



function App() {
const [lang, setLang] = useState('ua')

const toggleLang = () => setLang(prevLang => prevLang === 'ua' ? "en" : "ua")


  return (
    <div >

        <Navbar lang={lang} toggleLang={toggleLang} />
        <Main lang={lang}/>
        <Footer lang={lang}/>
 
    </div>
  );
}

export default App;