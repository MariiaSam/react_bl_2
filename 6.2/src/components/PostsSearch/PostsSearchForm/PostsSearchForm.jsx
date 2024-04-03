import { useState, useEffect, useRef, useMemo } from "react";
import { nanoid } from "nanoid";
import styles from "./posts-search-form.module.css";

const PostsSeachForm = ({onSubmit}) => {
  const [state, setState] = useState({
      search: "",
  });

  const inputRef = useRef(null);

  useEffect(()=> {
      inputRef.current.focus();
  }, [])

  const handleChange = ({target}) => {
      const {name, value} = target;
      setState({
          ...state,
          [name]: value,
      })
  }

  const handleSubmit = (e)=> {
      e.preventDefault();
      onSubmit({...state});
      reset();
  }

  const reset = () => {
      setState({
          search: ""
      });
  }
const searchId = useMemo(() => nanoid(), [])

  console.log("render")

  return (
      <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
              <label htmlFor={searchId}>Enter search phrase</label>
              <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" placeholder="Enter search phrase" />
          </div>
          <button type="submit">Search</button>
      </form>
  )
}

// class PostsSeachForm extends Component {
//   state = {
//     search: "",
//   };

//   handlerChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };// щоб записати змыни в стейт з форми

//   handlerSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.setState({
//       search: "",
//     });
//   };// щоб відправити форму

//   render() {

//     const {handlerChange, handlerSubmit } = this
//     const {search } = this.state

//     return (
//       <form onSubmit={handlerSubmit} className={styles.form}>
//         <div className={styles.fieldGroup}>
//           <label>Enter Search</label>
//           <input value={search} name="search" onChange={handlerChange} type="text" placeholder="Enter Search" required />
//         </div>
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// }

export default PostsSeachForm;
