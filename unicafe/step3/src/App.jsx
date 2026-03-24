import { useState } from 'react'

const Statistics = (props) => {
  console.log('statistics props')
  return(
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all===0? 0 : (good-bad)/all
  const positive = all===0?0 : (good/all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={(e) => setGood(good + 1)}>good</button>
      <button onClick={(e) => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={(e) => setBad(bad + 1)}>bad</button>
      
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App