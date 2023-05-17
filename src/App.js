import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import { users } from "./user"
import "./App.css"

function App() {
  const id = Date.now()
  const [user, setUser] = useState(users)
  const [newUser, setNewUser] = useState({ name: '', job: '', id: null })

  const handleAddUser = (e) => {
    e.preventDefault()
    if (newUser.name.length <= 0 || newUser.job.length <= 0) {
      alert("Error in adding users!")
    } else {
      setUser([...user, newUser])
      setNewUser({ name: '', job: '', id: null })
    }
  }

  const handleGetData = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value, id })
  }

  console.log(user);

  return (
    <>
      <Form newUser={newUser} handleGetData={handleGetData} handleAddUser={handleAddUser} />
      <Card users={user} />
    </>
  );
}

export default App;