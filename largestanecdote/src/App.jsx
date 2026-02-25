import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
   // Create zero-filled array with same length as anecdotes
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  )
  // const [votes, setVotes] = useState([1, 4, 6, 3, 7, 0, 0, 0])

  const handleAnecdotesClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
    console.log(randomNumber)
  }

 const handleVoteClick = () => {
    const copy = [...votes]       // copy the array
    copy[selected] += 1           // increment vote for selected anecdote
    setVotes(copy)
    console.log('copy of selected',copy)                // update state
  }
    
  // Find index of anecdote with most votes
  const maxVotes = Math.max(...votes)
  console.log('maximum',maxVotes)
  const mostVotedIndex = votes.indexOf(maxVotes)
  console.log('most vote index',mostVotedIndex)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>votes</button>
      <button onClick={handleAnecdotesClick}>next anecdotes</button>

      <h1>Anecdote with most votes</h1>
      {maxVotes > 0 ? (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>has {maxVotes} votes</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  )
}

export default App