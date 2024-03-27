import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import PostsSearchPage from "./pages/PostsSearchPage/PostsSearchPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFounPage from "./pages/NotFoundPage/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";


const AppRoutes = () => {
return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={HomePage}/>
        <Route path="posts-search" element={<PostsSearchPage />} />
        <Route path="posts/:id" element={<SinglePostPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFounPage />} />
     </Route>  
     </Routes>
    </>
    )
}

export default AppRoutes