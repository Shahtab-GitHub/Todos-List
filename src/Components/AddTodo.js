import React, {useState} from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submitAddTodo = (e)=>{
        e.preventDefault(); //Page not reload

        props.addTodo(title, desc)
        setTitle("")
        setDesc("")
    }

    const myStyle = {
        margin: "80px"
    }

  return (
    <div className="container" style={myStyle}>
        <h3 className='text-center'>Add a Todo</h3>
        <form onSubmit={submitAddTodo}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value = {desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"  />
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button disabled={title.length<5 || desc.length<5} type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo
