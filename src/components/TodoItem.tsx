import { TodoInterface } from "../interfaces"

const TodoItem = (data: TodoInterface) => {
  return (
    <li style={{"display": "flex"}}>
      <input type="checkbox" checked={data.completed ? true : false}/>
      <p>{data.title}</p>
      <button>Delete</button>
    </li>
  )
}

export default TodoItem