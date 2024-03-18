import { Component } from "react";
import styles from "./posts-search-form.module.css";

class PostsSeachForm extends Component {
  state = {
    search: "",
  };

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };// щоб записати змыни в стейт з форми

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      search: "",
    });
  };// щоб відправити форму

  render() {

    const {handlerChange, handlerSubmit } = this
    const {search } = this.state

    return (
      <form onSubmit={handlerSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label>Enter Search</label>
          <input value={search} name="search" onChange={handlerChange} type="text" placeholder="Enter Search" required />
        </div>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default PostsSeachForm;
