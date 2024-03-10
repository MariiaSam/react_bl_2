import MainMenu from "./components/MainMenu/MainMenu";
import ToggleButton from './components/ToggleButton/ToggleButton'
import Vote from './components/Vote/Vote'

import menuItems from "./data/menu.json"

 

function App() {
  return (
    <div >
      <MainMenu items={menuItems}/>
     <ToggleButton text='Click me' type="button"/>
     <Vote />

    </div>
  );
}  

export default App;
