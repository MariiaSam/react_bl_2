import { Component } from "react";

import PostsSeachForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";

import { searchPosts } from "../../api/posts";

import Button from "../Button/Button";

import styles from "./posts-search.module.css";
class PostsSearch extends Component {
  state = {
    search: "",
    posts: [],
    loading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
        this.fetchPosts();
    }
}

async fetchPosts() {
    const { search, page } = this.state;
    try {
        this.setState({
            loading: true,
        });
        const { data } = await searchPosts(search, page);
        this.setState(({ posts }) => ({
            posts: data?.length ? [...posts, ...data] : posts,
        }))
    }
    catch (error) {
        this.setState({
            error: error.message
        })
    }
    finally {
        this.setState({
            loading: false,
        })
    }
}

  handlerSearch = ({ search }) => {
    this.setState({
      search,
      posts: [],
      page: 1,
    });
  };

  loadMore = () => {
 this.setState(({ page }) => ({ page: page +1}))
}


  render() {
    const { posts, loading, error } = this.state;
    const { handlerSearch, loadMore } = this;
    const isPosts = Boolean(posts.length);

    return (
      <>
        <PostsSeachForm onSubmit={handlerSearch} />
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {isPosts && <PostsSearchList items={posts} />}
        {isPosts && (
          <div className={styles.loadMoreWrapper}>
            <Button onClick={loadMore} type="button">Load More</Button>
          </div>
        )}
      </>
    );
  }
}

export default PostsSearch;
