import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPostById } from "../../api/posts";

import styles from "./single-post.module.css";

const SinglePosts = () => {
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams()

    const navigate = useNavigate()
useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const { data } = await getPostById(id);
                setPost(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, []);

    const goBack = () => navigate(-1)

return (
    <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={goBack} type='button'>Go Back</button>
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )

}

export default SinglePosts