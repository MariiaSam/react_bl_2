import MainMenu from "./components/MainMenu/MainMenu";

import menuItems from "./data/menu.json"

function App() {
  return (
    <div >
      <MainMenu items={menuItems}/>
     

    </div>
  );
}  

export default App;
