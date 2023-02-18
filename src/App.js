import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { id: "1", name: "chehine", age: 23 },
    { id: "2", name: "houssem", age: 26 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const deletePersonHandler = (index) => {
    setPersons((persons) => {
      const newPersons = [...persons];
      newPersons.splice(index, 1);
      return newPersons;
    });
  };

  const nameHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex],
      name: event.target.value,
    };

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    setPersons(newPersons);
  };

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  };

  const style = {
    backgroundColor: "green",
    color:"white",
    font: "inherit",
    border: "1x solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let personsList = null;
  if (showPersons) {
    personsList = (
      <div>
        {persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => nameHandler(event, person.id)}
            click={() => deletePersonHandler(index)}
          />
        ))}
      </div>
    );

    style.backgroundColor ='red';
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style} 
        onClick={togglePersonHandler}>
        Toggle Persons
      </button>
      {personsList}
    </div>
  );
}

export default App;
