const Header = ({ course }) => {
  console.log('header props',course)
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ name, exercises}) => {
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('content props',props )
  return(
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises}/>
      <Part name={props.part2.name} exercises={props.part2.exercises}/>
      <Part name={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log('Total props',props)
  return(
    <div>
      <p>Total of {props.part1.exercises + props.part2.exercises + props.part2.exercises + props.part3.exercises} exercises</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App