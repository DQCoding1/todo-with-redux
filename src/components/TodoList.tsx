import TodoItem from "./TodoItem";
import { TodoInterface } from "../interfaces/index";
import { useAppSelector } from "../redux/Hooks";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo: TodoInterface) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
