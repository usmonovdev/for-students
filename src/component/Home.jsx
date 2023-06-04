import { useDispatch, useSelector } from 'react-redux'
import axios from '../api'
import React, { useEffect } from 'react'
import { logOut, registerUserSuccess } from '../reduxes/userSlice'

const Home = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state);
  const getUserData = async () => {
    const token = JSON.parse(localStorage.getItem("TOKEN"))
    if (token) {
      try {
        const response = await axios.get("/user")
        dispatch(registerUserSuccess(response.data.user))
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  const handleLogOut = () => {
    dispatch(logOut())
    localStorage.removeItem("TOKEN")
  }

  return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogOut}>log out</button>
      {state ? <p>username: {state.user.username}</p> : ""}
    </div>
  )
}

export default Home