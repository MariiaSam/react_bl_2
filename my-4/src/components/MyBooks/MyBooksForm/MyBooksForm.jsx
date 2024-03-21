import {useState, useMemo, memo, useCallback } from "react";
import { nanoid } from "nanoid";

import styles from "./my-books-form.module.css";

const INITIAL_STATE = {
    title: "",
    author: "",
  };

  const MyBooksForm = ({onSubmit}) => {
    const [state, setState] = useState({...INITIAL_STATE});

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState({
            ...state,
            [name]: value,
        })
    }, [])

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state}); 
        reset();
    }

    const reset = useCallback(() => {
        setState({...INITIAL_STATE});
    }, [])

    const bookTitleId = useMemo(() => nanoid(), [])
    const bookAuthorId =  useMemo(() => nanoid(), [])

    const {title, author} = state;
        
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor={bookTitleId}>Book title</label>
                <input value={title} required name="title" onChange={handleChange} id={bookTitleId} placeholder="Book title" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={bookAuthorId}>Book author</label>
                <input value={author} required name="author" onChange={handleChange} id={bookAuthorId} placeholder="Book author" />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

// class MyBooksForm extends Component {
//   bookTitleId = nanoid();
//   bookAuthorId = nanoid();

// //   state = {
// //     title: "",
// //     author: "",
// //   };

// state = {...INITIAL_STATE}

//   handlerChange = ({ target }) => {
//     // e.target.value
//     // e.target.name
//     const { name, value } = target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handlerSubmit = (e) => {
//     e.preventDefault();
//     // this.setState({
//         // ...INITIAL_STATE
//         // title: "",
//         // author: "",
//     // обнулити стейт після відправвки форми, ResertForm
//       // }) 
//       this.props.onSubmit({...this.state});
//       this.reset();
//   }

//   reset() {
//       this.setState({...INITIAL_STATE});
    
//   };

//   render() {
//     const { bookTitleId, bookAuthorId, handlerSubmit, handlerChange } = this;
//     const { title, author} = this.state

//     return (
//       <form onSubmit={handlerSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor={bookTitleId} className={styles.label}>
//             Book Title
//           </label>
//           <input value={title}
//             required
//             name="title"
//             onChange={handlerChange}
//             id={bookTitleId}
//             placeholder="Book title"
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor={bookAuthorId} className={styles.label}>
//             Book author
//           </label>
//           <input value={author}
//             required
//             name="author"
//             onChange={handlerChange}
//             id={bookAuthorId}
//             placeholder="Book author"
//           />
//         </div>
//         <button type="submit">Add book</button>
//       </form>
//     );
//   }
// }

export default memo(MyBooksForm);
