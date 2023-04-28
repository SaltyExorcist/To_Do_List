import {useEffect, useState} from "react"
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos,setTodos]=useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if (localValue==null) return []

    return JSON.parse(localValue)
  })

  {/*Takes a func as an agrument. Basically it will only be called when the values in the list have changed.*/}
  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos)) 
  },{todos})

  function addTodo(title)
  {
    setTodos(currentTodos => {
        return[
           ...currentTodos,
          {id: crypto.randomUUID(),title,completed:false},
        ]
     })
  }

  function toggleTodo(id,completed) 
  {
      setTodos(currentTodos =>{
        return currentTodos.map(todo => {
          if(todo.id === id){
            return {...todo,completed}
          }
          return todo
        })
      })
  } 

  function deleteTodo(id)
  {
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id !== id)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>     {/*Importing a component*/}
      <h1 className="header">To-Do-List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </>
  )   
}

export default App

//NOTE: Hooks cannot be rendered conditionally in REACT, so always put them at the top of the file. 