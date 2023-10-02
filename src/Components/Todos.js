import React from 'react'
import TodoItem from './TodoItem';


const Todos = (props) => {
    const myStyle = {
        minHeight : "70vh",
        margin: "80px"
    }
    const {todos} = props
  return (
    <div className="container " style = {myStyle}>
        <h3 className="text-center">Todos List</h3>  
        {todos.length === 0 ? "No Todos to display" :
            todos.map((todo)=>{
                // return (
                //     <>
                //         <h2>{todo.sno}</h2>
                //         <TodoItem todosItm = {todo} key = {todo.sno} onDeleteItm = {props.onDelete} />
                //          <hr/>
                //     </>
                // )
                return (<TodoItem todosItm = {todo} key = {todo.sno} onDeleteItm = {props.onDelete} />)
            })
        }
    </div>
  )
}

export default Todos
