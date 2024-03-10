import { Component } from "react";

import styles from "./vote.module.css";

class Vote extends Component {
  static voteOptions = ["democrats", "respub"];

  state = {
    democrats: 0,
    respub: 0,
  };

  calcTotal() {
    const {democrats,  respub} = this.state
    const total = democrats + respub;
    return total
// const values = Object.values(this.state)
// const total = values.reduce((acum, value) => acum  + value, 0)
}

calcPercentage(keyName) {
    const total = this.calcTotal()

    if (!total) {
        return 0
    }     const value = this.state[keyName]
    return Number(((value / total) * 100).toFixed(2))}

    leaveVote = (keyName) => {
      this.setState(prevState => {
          return {
              [keyName]: prevState[keyName] + 1
          }
      })
  //keyName - назва партії
}

  render() {
    const { democrats, respub } = this.state;

    const buttonElements = Vote.voteOptions.map((name) => (
      <button onClick={(() => this.leaveVote(name))} key={name}>{name}</button>
    ));
    
    const total = this.calcTotal();
    // const democratPercentage = Number((democrats / total).toFixed(2));
    // const respubPercentage = Number((respub / total).toFixed(2));
    const democratPercentage = this.calcPercentage('democrats');
    const respubPercentage = this.calcPercentage('pespub');

    return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}> Leave you vote</h4>
          {buttonElements}
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Result</h4>
          <p>Total: {total}</p>
          <p>Democrats percent: {democratPercentage} %</p>
          <p>Respub percent: {respubPercentage} %</p>
        </div>
      </div>
    );
  }
}

export default Vote;
