import React from 'react'

const TodoItem = (props) => {
  return (
    <div className="container my-3">
      <h3>{props.todosItm.title}</h3>
      <p>{props.todosItm.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDeleteItm(props.todosItm)}}> Delete </button>
      <hr />
    </div>
  )
}

export default TodoItem
