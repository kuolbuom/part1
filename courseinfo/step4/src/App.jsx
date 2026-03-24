const Header = ({ course}) => {
  console.log('header props', course)
  return(
    <div>
     <h1>{course}</h1>
    </div>
  )
}

const Part = ({ name, exercise}) => {
  console.log('part component props', name, exercise)
  return(
    <div>
       <p>{name} {exercise}</p>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log('content props', parts)
  return(
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts })=> {
  console.log('Total parts props', parts)
  return(
    <div>
       <h3>Total of {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises</h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;