import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [total, setTotal] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

  // derived values not a state
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  

// handles the clicks on the buttons
  const handleGoodClick = () =>{
    const updateGood = good + 1
   setGood(updateGood)
  //  setTotal(updateGood + neutral + bad)
  //  setAverage((updateGood - neutral - bad)/total)
   console.log('average',average)
   console.log(total)
   console.log('good click, before', good)
  }
  const handleNeutralClick = () =>{
    const updateNeutral = neutral + 1
   setNeutral(updateNeutral)
  //  setTotal(updateNeutral + good + bad)
   console.log('neutral click, before', neutral)
  }
  const handleBadClick = () =>{
    const updateBad = bad + 1
   setBad(updateBad)
  //  setTotal(updateBad + good + neutral)
   console.log('bad click, before', bad)
  }

  return (
    <div>
      <h1><p>give feedback</p></h1>
    <button onClick={handleGoodClick}>good</button>
    <button onClick={handleNeutralClick}>neutral</button>
    <button onClick={handleBadClick}>bad</button>
     <h1><p>statistics</p></h1>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>all {total}</p>
    <p>average {average}</p>
    <p>positive {positive}</p>
    
    </div>
  )
}

export default App