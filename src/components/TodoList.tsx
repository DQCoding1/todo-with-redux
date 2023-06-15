import TodoItem from "./TodoItem";
import { TodoInterface } from "../interfaces/index";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { deleteAllTodos } from "../redux/todoSlice"
import "./TodoList.css"

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(deleteAllTodos())
  }

  return (
    <ul className="todos">
      {todos.map((todo: TodoInterface) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
      <button className="todos__deleteAll" onClick={handleClick}>Delete All</button>
    </ul>
  );
};

export default TodoList;
