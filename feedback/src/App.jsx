import { useState } from 'react'

const Button = ({onClick,Text}) => <button onClick = {onClick}>{Text}</button>

const Header = (props) => <div><h1><p>{props.name}</p></h1></div>
 
const Content = (props) => {
  console.log(props)
  return(
    <div>
     <p>good {props.good}</p>
     <p>neutral {props.neutral}</p>
     <p>bad {props.bad}</p>
    </div>
  )
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
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
     <Header name = 'give feedback'/>
     <Button onClick={handleGoodClick} Text='good'/>
     <Button onClick={handleNeutralClick} Text='neutral'/>
     <Button onClick={handleBadClick} Text='bad'/>
     <Header name = 'statistic'/>
     <Content
     good={good}
     neutral={neutral}
     bad={bad}
     />
    </div>
  )
}

export default App