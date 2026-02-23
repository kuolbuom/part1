const Header = (props) => {
  console.log(props)
  return(
    <div>
     <h1><p>{props.course.name}</p></h1>
    </div>
  )
}

const Part = ({name,exercises}) => {
  console.log(name,exercises)
  return(
    <div><p>{name} {exercises}</p></div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part
        name={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        name={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        name={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
       <Header course = {course}/>
       <Content course={course}/>
       <p>The number of exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}</p>
    </div>
  )
}

export default App;