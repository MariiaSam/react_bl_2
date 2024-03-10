// import styles from "./vote.module.css";

const VoteResults = ({ total, democratPercentage, respubPercentage }) => {
  return (
    <>
      <p>Total: {total}</p>
      <p>Democrats percent: {democratPercentage} %</p>
      <p>Respub percent: {respubPercentage} %</p>
    </>
  );
};

export default VoteResults;
