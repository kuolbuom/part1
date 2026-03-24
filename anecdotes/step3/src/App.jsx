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
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...vote]//copy the array
    copy[selected] += 1 //increase vote for current anecdote 
    setVote(copy)
  }
  
  const handleAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
    console.log('random number generated',randomNumber)
  }
//  logic for most voted
  const maxVote = Math.max(...vote)
  const maxIndex = vote.indexOf(maxVote)

  return (
    <div>
      <div>
        <h1>anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div>has {vote[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdotes}>next anecdotes</button>
      <div>
        <h1>anecdote with most vote</h1>
          {maxVote===0 ? (
            <div>No vote given</div>
          ):(
            <>
              <div>{anecdotes[maxIndex]}</div>
              <div>has {maxVote} vote</div>
            </>
          )}
        {/* <div>{anecdotes[selected]}</div>
        <div>has {vote[selected]} votes</div> */}
      </div>
    </div>
  )
}

export default App