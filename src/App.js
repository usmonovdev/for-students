import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { addCounter, removeCounter, resetCounter, addLocalcounter } from "./count/CounterSlice";
import { useState } from "react";

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [newCount, setNewCount] = useState("1")
  console.log(newCount);
  return (
    <>
      <h1>Count: {state.reducer.value}</h1>
      <button onClick={() => dispatch(addCounter())}>add</button>
      <button onClick={() => dispatch(removeCounter())}>remove</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
      <input type="text" value={newCount} onChange={(e) => setNewCount(e.target.value)} />
      <button onClick={() => dispatch(addLocalcounter(Number(newCount) || 0))}>add local</button>
    </>
  );
}

export default App