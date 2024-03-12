import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/Button'
import Stats from './components/Stats'


const App = () => {
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)

  const hasFeedback = good > 0 || neutral > 0 || bad > 0

  return (
    <>
      <div>
        <h2>Give Feedback</h2>
        <Button handleClick={() => setGood(prevValue => prevValue + 1)} text="good"></Button>
        <Button handleClick={() => setNeutral(prevValue => prevValue + 1)} text="neutral"></Button>
        <Button handleClick={() => setBad(prevValue => prevValue + 1)} text="bad"></Button>
      </div>
      <div>
        {!hasFeedback && <p>No Feedback Given</p>}
        {hasFeedback && <Stats 
        good={good}
        bad={bad}
        neutral={neutral}>
        </Stats>}
      </div>
      

    </>
  )
}

export default App