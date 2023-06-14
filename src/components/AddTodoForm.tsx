import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo({
      title: inputValue
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add new todo"
        onChange={handleChange}
        value={inputValue}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTodoForm;
