import React from 'react'
// import { Form } from 'react-router-dom'
import Header from './components/ToDoList/Header'
import List from './components/ToDoList/List'
//import Form from './components/ToDoList/Form'

function ToDoList() {
  return (
    <div className="todo-list">
        <Header/>
        <List/>
        
    
    </div>
  )
}

export default ToDoList