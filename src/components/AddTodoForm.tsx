import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useAppDispatch } from "../redux/Hooks";
import "./AddTodoForm.css";

const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(
        addTodo({
          title: inputValue,
        })
      );
      setInputValue("");
    } else {
      alert("INPUTS CAN NOT BE EMPTY");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="form__inputText"
        placeholder="add new todo"
        onChange={handleChange}
        value={inputValue}
      />
      <input type="submit" value="Submit" className="form__inputSubmit" />
    </form>
  );
};

export default AddTodoForm;
