import { useState } from 'react'

const App = () => {
  const id = 0
  const [persons, setPersons] = useState([{ 
    name: 'Arto Hellas',
    id: id,
    number: '555-555-5555',
   }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }
    if(!checkForDuplicates(nameObject.name)) {
      setPersons(persons.concat(nameObject))
      console.log(persons)
      setNewName(() => '')
      setNewNumber(() => '')
    }
    else {
      alert('Contact already exists in phone book, try again')
    }
  }

  const handleNameChange = (event) => {
    setNewName(() => event.target.value)
    console.log(newName)
  }

  const handleNumberChange = (event) => setNewNumber(() => event.target.value)

  const checkForDuplicates = (name) => {
    return persons.some((person) => person.name === name)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          name: <input value={newName} placeholder='Name?' onChange={handleNameChange}/>
          <br />
          number: <input value={newNumber} placeholder='Phone #' onChange={handleNumberChange}/>
          <br/>
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.id}>{person.name} {person.number}</li>
        })}
      </ul>
    </div>
  )
}

export default App
