import { Link, Outlet } from 'react-router-dom'

import SinglePosts from '../../components/SinglePost/SinglePost'

import styles from './single-post-page.module.css'


const SinglePostPage = () => {

return (
    <div>
      <SinglePosts/>
      <Link to='comments'>Comments </Link>
      <Outlet />

    </div>
    )
}

export default SinglePostPage