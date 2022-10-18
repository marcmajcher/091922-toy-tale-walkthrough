import React, { useEffect, useState } from 'react';

import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

const API = 'http://localhost:3001/toys';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setToys);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function createNewToy(toy) {
    /// fetch(API {headers, data, etc}).then(json dance).then(set state with the real toy/id)
    setToys( [{...toy, id: Math.random()}, ...toys] )
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm createNewToy={createNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
