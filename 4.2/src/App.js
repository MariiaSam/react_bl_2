
import { useState } from 'react';

import Navbar from './modules/Navbar/Navbar';
import Main from "./modules/Main/Main";
import Footer from './modules/Footer/Footer';


import LangProvider from './context/langContext';
function App() {




  return (
    <div >
     <LangProvider>

        <Navbar />
        <Main/>
        <Footer/>
 </LangProvider>
    </div>
  );
}

export default App;