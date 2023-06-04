import React, { useEffect, useState } from 'react'
import InputComponent from '../ui/InputComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserError, loginUserStart, loginUserSuccess } from '../reduxes/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector(state => state)
  console.log(state);

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
    try {
      const response = await axios.post("/users/login", {
        user: { email, password }
      })
      dispatch(loginUserSuccess(response.data.user))
      navigate("/")
    } catch (error) {
      dispatch(loginUserError(error.message))
      console.log(error.message);
    }
  }

  useEffect(() => {
    // if (state.isLoggedIn) navigate("/")
  }, [])

  return (
    <div>
      <form>
        <InputComponent placeholder={"Email"} value={email} setValue={setEmail}/>
        <InputComponent placeholder={"Password"} value={password} setValue={setPassword}/>
        <button onClick={handleLogin}>log in</button>
      </form>
    </div>
  )
}

export default Login