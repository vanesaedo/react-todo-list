//import './App.css'
import React, { useState } from 'react';

import List from './List'
import Item from './Item'
import FormTodoList from './FormTodolist'

function App() {  
  const [task, setTask] = useState(0)
  return (
      <div>
        <FormTodoList/> 
        <List><Item>{task}</Item></List>
        <button onClick={() => setTask(task)}>Add Task</button>
    </div>

  )
}

console.log(task)
/* { <TodoList nombre={miNombre} cambiarCount={setCount}>


</TodoList> } */
export default App
