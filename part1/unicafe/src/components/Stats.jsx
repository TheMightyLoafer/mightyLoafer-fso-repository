import React from 'react';

const Stats = ({ good, neutral, bad, ...props }) => {
    const total = () => {
        return good + neutral + bad
      }
    
      const average = () => {
        const totalVote = total()
        return totalVote === 0 ? "0" : ((good + neutral + bad) / 3).toFixed(2)
      }
    
      const positive = () => {
        const totalVote = total()
        return totalVote === 0 ? "0" : ((good / totalVote) * 100).toFixed(2)
      }
  return (
    <div>
      <h2>Results</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Average: {average()}</p>
      <p>Positive: {positive()}%</p>
    </div>
  );
};

export default Stats;
