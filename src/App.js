import React, { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import Nav from './Components/Nav';

const App = () => {

  const [todos, setTodos] = useState([])


  // function to populate to do list 
  const addTodo = (text) => {
    let id = Math.floor(Math.random()* 1000) + 1
    let todo = {id:id, text:text, completed:false}
    let newTodos = [todo, ...todos]
    console.log(newTodos);
    setTodos(newTodos)
  }
  const deleteTodo =(id)=>{
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  } 

  const markTodo =(id)=>{
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='todo'>
      <h1>To-do List</h1>
      <Nav addTodo={addTodo}></Nav>
      {
        todos.map((todo)=>{
          return(<Container todo={todo} key={todo.id} deleteTodo ={deleteTodo} markTodo={markTodo}>
          </Container>)
        })
      }
    </div>
  );
}

export default App;