import { useState, useEffect } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Combine anecdote and its vote count into a single object
  const initialAnecdotesWithVotes = anecdotes.map((anecdote, index) => ({
    anecdote,
    votes: 0,
    id: index, // Unique identifier for each anecdote
  }));

  const [anecdotesWithVotes, setAnecdotesWithVotes] = useState(
    initialAnecdotesWithVotes
  );
  const [selected, setSelected] = useState(null);

  const randomNum = () => {
    return Math.floor(Math.random() * anecdotes.length); // Adjusted range
  };

  const handleVote = () => {
    if (selected === null) return; // Check if an anecdote is selected

    setAnecdotesWithVotes((prevAnecdotes) => {
      // Create a copy of the previous state array to avoid mutating it directly
      const updatedAnecdotes = [...prevAnecdotes];
      // Update the vote count for the selected anecdote
      updatedAnecdotes[selected - 1].votes += 1;
      // Return the updated state
      return updatedAnecdotes;
    });
  };

  // Find the anecdote with the most votes
  const mostVotedAnecdote = anecdotesWithVotes.reduce(
    (mostVoted, current) =>
      current.votes > mostVoted.votes ? current : mostVoted,
    anecdotesWithVotes[0]
  );

  useEffect(() => {
    setSelected(randomNum());
  }, []); // Run only once on component mount

  return (
    <div>
      {selected !== null && (
        <>
          <h2>{anecdotes[selected - 1]}</h2>
          <p>Has {anecdotesWithVotes[selected - 1]?.votes} Votes</p>
          <button onClick={handleVote}>Vote</button>
        </>
      )}

      <br />
      <button onClick={() => setSelected(randomNum())}>next anecdote</button>
      <br />
      <h3>Most Voted Anecdote</h3>
      <p>{mostVotedAnecdote.anecdote}</p>
      <p>Has {mostVotedAnecdote.votes} Votes</p>
    </div>
  );
};

export default App;
