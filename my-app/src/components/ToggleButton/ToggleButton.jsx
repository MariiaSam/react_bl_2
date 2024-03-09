import { Component } from "react";

import styles from './toggle-button.module.css'

class ToggleButton extends Component {
    state = {
        active: false,
    }

    handlerClick() {
        const {active} = this.state
        this.setState({
            active: !active
        })
    }

    render() {
    
        const {text} = this.props
        const {active} = this.state

        const fullClassName = active ? `${styles.active} ${styles.btn}` : styles.btn;

        return <button onClick={this.handlerClick} className={fullClassName} type="submit">{text}</button>
    }

}

export default ToggleButton
