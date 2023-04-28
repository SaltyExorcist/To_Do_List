import {useState} from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem]=useState("")

    function handleSubmit(e)
  {
    e.preventDefault()
    if(newItem=="") return
    
    onSubmit(newItem)
  
    setNewItem(""); {/*Used for clearing the input field after submitting the value*/ }
  }

    return(
       <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value= {newItem}
      onChange={e =>setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
    )
}