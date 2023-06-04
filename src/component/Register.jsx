import React, { useEffect, useState } from "react";
import InputComponent from "../ui/InputComponent";
import axios from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserError,
  registerUserStart,
  registerUserSuccess,
} from "../reduxes/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate()
  console.log(state);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    try {
      const response = await axios.post("/users", {
        user: { username, email, password },
      });
      dispatch(registerUserSuccess(response.data.user));
      navigate("/")
    } catch (error) {
      dispatch(registerUserError(error.message));
    }
  };

  useEffect(() => {
    // if (state.isLoggedIn) navigate("/")
  }, [])
  return (
    <div>
      <form>
        <InputComponent
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <InputComponent
          placeholder={"Email"}
          type={"email"}
          value={email}
          setValue={setEmail}
        />
        <InputComponent
          placeholder={"Password"}
          type={"password"}
          value={password}
          setValue={setPassword}
        />
        <button onClick={handleRegister}>register</button>
      </form>
    </div>
  );
};

export default Register;
