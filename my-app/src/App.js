import MainMenu from "./components/MainMenu/MainMenu";
import ToggleButton from './components/ToggleButton/ToggleButton'

import menuItems from "./data/menu.json"

 

function App() {
  return (
    <div >
      <MainMenu items={menuItems}/>
     <ToggleButton text='Click me'/>

    </div>
  );
}  

export default App;
