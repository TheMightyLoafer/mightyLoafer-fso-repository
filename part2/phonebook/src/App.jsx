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
  const [searchQuery, setSearchQuery] = useState('')

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
  
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Call filterPersons with persons and searchQuery
    const filteredPersons = filterPersons(persons, searchQuery);
    // You can potentially do something with the filtered list here
  }

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
  const handleSearchChange = (event) => {
    setSearchQuery(() => event.target.value)
  }

  const handleNumberChange = (event) => setNewNumber(() => event.target.value)

  const checkForDuplicates = (name) => {
    return persons.some((person) => person.name === name)
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
          </ul>
      </div>
      ))}
    </div>
  )
}

export default App
