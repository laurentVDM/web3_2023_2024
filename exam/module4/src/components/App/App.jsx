import Form from 'components/Form/Form';
import SearchBar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import personsService from '../../services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (name, number) => {
    // Check if the name already exists in the phonebook
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already in the phonebook!`);
    } else {
        personsService.create({ name, number })
        .then(response => {
          setPersons(persons.concat(response.data));
        })
        .catch(error => console.error('Error adding person:', error));
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} />
      <h2>Numbers</h2>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <ul>
        {filteredPersons.map(person => (
            <li key={person.id}>
                {person.name} - {person.number}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default App;