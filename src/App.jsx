import React, { useState } from 'react';

import data from './data';
import List from './List';

function App() {
  const [birthdayFolks, setBirthdayFolks] = useState(data)

  const allFolks = birthdayFolks.map(person => (
    <List person={person} key={person.id}/>
  ))

  console.log(birthdayFolks)
  
  return (
    <main>
      <div className="container">
        <h3>{`${birthdayFolks.length} birthdays today`}</h3>

        {allFolks}

        <button
          onClick={() => {setBirthdayFolks([])}}
        >
          Clear All
        </button>
      </div>
    </main>
  )
}

export default App;
