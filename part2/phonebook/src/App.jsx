import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ 
    name: 'Arto Hellas',
    id: persons.length + 1,
   }])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }

    setPersons(person.concat(nameObject))
    setNewName(() => "")
  }

  const handleChange = (event) => {
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App
