import { useState } from 'react'

const Statisticslines = ({value,text}) => <div><p>{text} {value}</p></div>


const Statistics = (props) => {
  //the total is used conditionally to calculate whether there is feedback or not
  if (props.total === 0) {
    return (
      <div>
        <h1>No feedback gathered</h1>
      </div>
    )
  }else{
    return (
      <div>
        <Statisticslines text='good' value={props.good} />
        <Statisticslines text='neutral' value={props.neutral} />
        <Statisticslines text='bad' value={props.bad} />
        <Statisticslines text='all' value={props.total} />
        <Statisticslines text='average' value={props.average} />
        <Statisticslines text='positve' value={props.positive} />
      </div>
    )
  }
}


//buttons align when destructured
const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
    
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
 
  // derived values not a state
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100


// handles the clicks on the buttons
  const handleGoodClick = () =>{
    const updateGood = good + 1
   setGood(updateGood)
   console.log('good click, before', good)
  }
  const handleNeutralClick = () =>{
    const updateNeutral = neutral + 1
   setNeutral(updateNeutral)
   console.log('neutral click, before', neutral)
  }
  const handleBadClick = () =>{
    const updateBad = bad + 1
   setBad(updateBad)
   console.log('bad click, before', bad)
  }

  return (
    <div>
     <h1><p>giv feedback</p></h1>
     <Button onClick={handleGoodClick} text='good'/>
     <Button onClick={handleNeutralClick} text='neutral'/>
     <Button onClick={handleBadClick} text='bad'/>
      
     <Statistics
     good={good}
     neutral={neutral}
     bad={bad}
     total={total}
     average={average}
     positive={positive}
     />
    
    </div>
  )
}

export default App