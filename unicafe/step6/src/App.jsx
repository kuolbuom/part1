import { useState } from 'react';

const Statisticsline = ({ text, value }) => {
  console.log('statistics line props', text, value)
  return(
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  ) 
}

const Statistics = (props) => {
  console.log('statistics props',props)
  if(props.all===0){
    return <p>No feedback given</p>
  }
 
  return(
    <table>
      <tbody>
        <Statisticsline text='good' value={props.good} />
        <Statisticsline text='neutral' value={props.neutral} />
        <Statisticsline text='bad' value={props.bad} />
        <Statisticsline text='all' value={props.all} />
        <Statisticsline text='average' value={props.average} />
        <Statisticsline text='positive' value={props.positive} />
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => {
  console.log('button props', onClick, text)
  return (
    <button onClick={onClick}>{text}</button>
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
      <Button onClick={(e) => setGood(good + 1)} text='good'/>
      <Button onClick={(e) => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={(e) => setBad(bad + 1)} text='bad'/>
      
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