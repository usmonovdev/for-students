import React, { memo } from 'react'

const Todos = memo(({ todos, addTodo }) => {
  console.log("Child Render");
  return (
    <>
        <h2>My Todo</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
})

export default Todos