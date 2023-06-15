import { TodoInterface } from "../interfaces";
import "./TodoItem.css"

const TodoItem = (data: TodoInterface) => {
  return (
    <li className="todo">
      <input
        type="checkbox"
        className="todo__checkbox"
        checked={data.completed ? true : false}
      />
      <p className="todo__title">{data.title}</p>
      <button className="todo_delete">Delete</button>
    </li>
  );
};

export default TodoItem;
