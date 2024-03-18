import { Component } from "react";

import PostsSeachForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";

import { getAllPosts } from "../../api/posts";

import styles from "./posts-search.module.css";
class PostsSearch extends Component {
    state = {
        search: "",
        posts: [],
        loading: false,
        error: null,
    };

    async componentDidUpdate(prevProps, prevState) {
        const { search } = this.state;
        if (search) {
            this.setState({
                loading: true,
            });
            try {
                const { data } = await getAllPosts(search);
                this.setState({
                    posts: data?.length ? data : []
                })
            } catch (error) {
                this.setState({
                    error: error.message,
                });
            } finally {
                this.setState({
                    loading: false,
                });
            }
        }
    }

    handlerSearch = ({ search }) => {
        this.setState({
            search,
        });
    };

    render() {
        const { posts, loading, error } = this.state;
        const { handlerSearch } = this;

        return (
            <>
                <PostsSeachForm onSubmit={handlerSearch} />
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>...Loading</p>}
                {Boolean(posts.length) && <PostsSearchList items={posts} />}
            </>
        );
    }
}

export default PostsSearch;
