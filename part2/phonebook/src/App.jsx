import { useState, useEffect } from 'react'
import axios from 'axios'
import services from './services/services'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayNotification, setDisplayNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [messageType, setMessageType] = useState('')

useEffect(() => {
  services
    .getAll()
    .then(res => {
      setPersons(res)
    })
}, [])

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
    }
    const existingContact = persons.find(person => person.name === nameObject.name)
    if(!existingContact) {
      services
        .create(nameObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setNewName('')
          setNewNumber('')
          handleNotification('Contact Added', 'success')
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
              handleNotification('Successfully Updated', 'success')
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

  const handleDelete = async (id) => {
    try {
      await services.deleteObj(id);
      const response = await services.getAll();
      setPersons(response.filter(person => person.id !== id)); // Filter out deleted object
      if(response){handleNotification('Deleted', 'success')}
    } catch (error) {
      console.error('Error deleting object:', error)
      handleNotification('There was an error', 'error')
    }
  };

  const handleNotification = (message, type) => {
    setDisplayNotification(true)
    setMessageType(type)
    setNotificationMessage(message)
    setTimeout(() => {
      setDisplayNotification(false)
    }, 5000)
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
        {displayNotification && <Notification messageType={messageType} message={notificationMessage} />}
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
