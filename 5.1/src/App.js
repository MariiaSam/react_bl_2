import { Routes, Route } from "react-router-dom";
import MainMenu from './components/MainMenu/MainMenu';
import HomePage from "./pages/HomePage/HomePage";
import PostsSearchPage from "./pages/PostsSearchPage/PostsSearchPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFounPage from "./pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post-search' element={<PostsSearchPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotFounPage />} /> 


      </Routes>
    </div>
  );
}

export default App;

// * коли адреси немає в списку