import { useState, Component } from "react";

import styles from "./toggle-button.module.css";

const ToggleButton = ({text}) => {
    const [active, setActive] = useState(false);

    // handlerClick = () => setActive(prevState => !prevState)
    
    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button onClick={()=> setActive(prevState => !prevState)} className={fullClassName} type="button">{text}</button>
}

// class ToggleButton extends Component {
    
    
//     static defaultProps = {
//         type: 'submit',
//       };

//     state = {
//         active: false,
//     }

//     handlerClick = () => {
//     //     const {active: prevState} = this.state
//     //     this.setState({
//     //         active: !prevState
//     //     })

//     this.setState(prevState => {
//         return {
//             active: !prevState.active
//         }
//     })
//     }

//     render() {
    
//         const {text, type} = this.props
//         const {active} = this.state

//         const fullClassName = active ? `${styles.btn} ${styles.active} ` : styles.btn;

//         return <button onClick={ this.handlerClick} className={fullClassName} type={type}>{text}</button>
//     }

// }

export default ToggleButton
 