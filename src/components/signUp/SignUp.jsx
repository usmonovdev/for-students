import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegisterStart, userRegisterSuccess, userregisterFailure } from "../../reduxes/userSlice";
import UserRegister from "../../api/userRegister";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useState((state) => state)
  console.log(state);

  const handleRegister = () => {
    dispatch(userRegisterStart());
    const user = {
      name: {
        firstName,
        lastName,
      },
      username,
      email,
      password,
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    };
    try {
      const response = UserRegister.userRegister(user);
      dispatch(userRegisterSuccess(response.data))
    } catch (error) {
      console.log(error);
      dispatch(userregisterFailure(error.message))
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </form>
      <Link to="login">You have an account? Log In</Link>
    </div>
  );
};

export default SignUp;
