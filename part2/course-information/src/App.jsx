import Course from './components/Course'

const App = () => {
  // const-definitions
  const course = { name: "Half stack application development",
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {    
      name: 'Arbitray Number',
      exercises: 4,
      id: 4
    },
    {
      name: 'Of Courses',
      exercises: 5,
      id: 5
    },
    {
      name: 'I could keep going',
      exercises: 25,
      id: 6
    },
    {
      name: 'And it will work',
      exercises: 2,
      id: 7
    }
  ]
}

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App