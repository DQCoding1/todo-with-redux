import { TodoInterface } from "../interfaces";
import { useAppDispatch } from "../redux/Hooks";
import { toggleCompleted } from "../redux/todoSlice";
import "./TodoItem.css";

const TodoItem = (data: TodoInterface) => {
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleCompleted({
      id: data.id,
      title: data.title,
      completed: e.target.checked
    }))
  };

  return (
    <li className="todo">
      <input
        type="checkbox"
        className="todo__checkbox"
        onChange={handleChange}
        checked={data.completed ? true : false}
      />
      <p className="todo__title">{data.title}</p>
      <button className="todo_delete">Delete</button>
    </li>
  );
};

export default TodoItem;
