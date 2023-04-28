// eslint-disable-next-line react/prop-types
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (<li>  {/*giving a unique key is important for React to distinguish between different elements*/}
    <label>
      <input type="checkbox" checked={completed}
       onChange={e =>toggleTodo(id, e.target.checked)}
      >
      </input>
      {title}
    </label>
    <button
     onClick={() => deleteTodo(id)} 
    className="btn btn-danger">Delete</button>
  </li>
    )
}