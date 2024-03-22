import { useState, useEffect } from 'react'
import axios from 'axios'
import services from './services/services'


const App = () => {
  const id = 0
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

useEffect(() => {
  services
    .getAll()
    .then(res => {
      setPersons(res)
    })
}, [persons])

  const filterPersons = (persons, searchQuery) => {
    if (!searchQuery) {
      return persons; // Return all persons if searchQuery is empty
    }
  
    const searchTerm = searchQuery.toLowerCase(); // Make search case-insensitive
    return persons.filter((person) => {
      return (
        person.name.toLowerCase().includes(searchTerm) ||
        person.number.toString().includes(searchTerm)
      );
    });
  };
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`,
    }
    const existingContact = persons.find(person => person.name === nameObject.name)
    if(!existingContact) {
      services
        .create(nameObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if(window.confirm('Name already exists, would you like to update the existing contact?'))
{        const updatedContact = {
          ...existingContact,
          number: newNumber,}

          services.update(existingContact.id, updatedContact)
            .then(() => {
              setPersons(persons.filter(person => person.id !== existingContact.id).concat(updatedContact))
              setNewName('')
              setNewNumber('')
            })
          }
    }
  }

  const handleNameChange = (event) => {
    setNewName(() => event.target.value)
    console.log(newName)
  }
  const handleSearchChange = (event) => {
    setSearchQuery(() => event.target.value)
  }

  const handleNumberChange = (event) => setNewNumber(() => event.target.value)

  const handleDelete = (id) => {
    services
      .deleteObj(id)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h3>Search For Contact</h3>
          Search: <input value={searchQuery} placeholder="Name or #" onChange={handleSearchChange} />
          <br />
      </div>
      <br />
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={addName}>
            name: <input value={newName} placeholder='Name?' onChange={handleNameChange}/>
            <br />
            number: <input value={newNumber} placeholder='Phone #' onChange={handleNumberChange}/>
            <br/>
            <button type="submit">add</button>
        </form>
      </div>

      <h2>Numbers</h2>
      {filterPersons(persons, searchQuery).map((person) => (
        <div key={person.id}>
          <h4>Contact</h4>
          <ul>
            <li>Contact Name: {person.name}</li>
            <li>Contact Number: {person.number}</li>
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </ul>
      </div>
      ))}
    </div>
  )
}

export default App
