import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [male, setMale] = useState(true)
  const filterdData = data.filter(e => e.gender == `${male ? "Male" : "Female"}`)

  const handleChangegender = () => {
    setMale(!male)
  }

  return (
    <>
      <h1>Users</h1>
      {filterdData.map((e) => {
        return <p key={e.id}>{e.name}</p>
      })}
      <button onClick={handleChangegender}>change gender</button>
    </>
  );
}

export default App;
