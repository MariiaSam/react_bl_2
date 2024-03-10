import { Component } from "react";
import styles from "./main-menu.module.css";

class MainMenu extends Component {
  static defaultProps = {
    items: [],
  };

  state = {
    activeIndex: 0,
  };

  handleClick(idx) {
    this.setState({
      activeIndex: idx,
    });
  }

//   handleClick = () => {
//     this.setState(prevState => {
//         return {
//          active: !prevState.active,
//         }
     
//     });
//   } 

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

    const elements = items.map(({ id, text, href }, index) => (
      <li key={id}>
        <a
          onClick={() => this.handleClick(index)}
          className={
            index === activeIndex
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
          href={href}
        >
          {text}
        </a>
      </li>
    ));
    console.log(this.props.items);

    return <ul className={styles.menu}>{elements}</ul>;
  }
}

export default MainMenu;
