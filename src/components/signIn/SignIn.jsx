import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginStart, userRegisterStart, userRegisterSuccess, userregisterFailure } from "../../reduxes/userSlice";
import UserRegister from "../../api/userRegister";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const state = useState((state) => state)
  // console.log(state);

  const handleRegister = () => {
    const user = {username, password}
    // dispatch(userLoginStart())
    const response = UserRegister.userLogin(user)
    console.log(response);
    try {

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleRegister}>
          Login
        </Button>
      </form>
      <Link to="login">You have an account? Log In</Link>
    </div>
  );
};

export default SignIn;
