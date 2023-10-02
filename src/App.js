import './App.css';
import React, {useState, useEffect} from 'react'
// import React, {useState} from 'react'
import Header from './Components/Header';
import Todos from './Components/Todos';
import About from './Components/About';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  //Delete Todo
  const onDelete = (e)=>{
    setTodos(todos.filter((sl)=>{
      return (sl !== e)
    }))
    
    localStorage.setItem("todos", JSON.stringify(todos)) //Delete at local Storage
  }

  //Add Todo
  const addTodoSubmit = (title, desc)=>{
    let sno;
    if(todos.length === 0){
      sno = 1
    }
    else{
      sno = todos[todos.length - 1].sno + 1
    }
    const newTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, newTodo])    
  }

  

  // const [todos, setTodos] = useState([
  //   {
  //     sno : 1,
  //     title : "Go to the market",
  //     desc : "You need to go to the market"
  //   },
  //   {
  //     sno : 2,
  //     title : "Go to the mall",
  //     desc : "You need to go to the mall"
  //   },
  //   {
  //     sno : 3,
  //     title : "Go to the resturent",
  //     desc : "You need to go to the resturent"
  //   },
  // ])
  const [todos, setTodos] = useState(initTodo)

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos)) //Saved at local Storage
  },[todos])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render = {()=>{
            return (
            <>
              <AddTodo addTodo = {addTodoSubmit}/>
              <Todos todos = {todos} onDelete = {onDelete} /> 
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        

        <Footer/>
      </Router>
    </>
  );
}

export default App;
