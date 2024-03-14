import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

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