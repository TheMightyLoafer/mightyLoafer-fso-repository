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
  const [anecdotesWithVotes, setAnecdotesWithVotes] = useState(
    anecdotes.map((anecdote, index) => ({
      anecdote,
      votes: 0,
      id: index,
      hasVoted: false,
    }))
  );

  const [selected, setSelected] = useState(randomNum());
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)
  
  const randomNum = () => {
    return Math.ceil(Math.random() * anecdotes.length - 1); // Adjusted range
  };

  const handleVote = (selectedIndex) => {
    setAnecdotesWithVotes((prevAnecdotes) => {
      const updatedAnecdotes = [...prevAnecdotes];
      updatedAnecdotes[selectedIndex].votes += 1;
      updatedAnecdotes[selectedIndex].hasVoted = true;
      return updatedAnecdotes;
    });
  };

  const selectRandomAnecdote = () => setSelected(randomNum());
  console.log(randomNum())

    // Use Effect hook to find the top voted anecdote on every render
    useEffect(() => {
      const topVoted = anecdotesWithVotes.reduce(
        (mostVoted, current) =>
          current.votes > mostVoted.votes ? current : mostVoted,
        anecdotesWithVotes[0]
      );
  
      setMostVotedAnecdote(topVoted); // Update the most voted anecdote state
    }, [anecdotesWithVotes]);

  return (
    <>
      <div>
      <h1>Anecdotes</h1>
      <p>{anecdotesWithVotes[selected]?.anecdote}</p>
      <button onClick={selectRandomAnecdote}>Next Anecdote</button>
      {console.log(selectRandomAnecdote)}
      <button onClick={() => handleVote(selected)}>Vote</button>
      {console.log(handleVote)}
      <p>Votes: {anecdotesWithVotes[selected]?.votes || 0}</p>
    </div>
    <div>
      <h1>Top Voted Anecdote</h1>
      {/* Display top voted anecdote information here */}
      <p><strong>Anedote: </strong>{mostVotedAnecdote.anecdote}</p>
      <p><strong>Votes: </strong>{mostVotedAnecdote.votes}</p>
    </div>
    </>

  );
};

export default App;
