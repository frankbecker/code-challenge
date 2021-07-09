import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/todos-actions";

const TodoFormComp = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    }
  };
  const createTodo = () => {
    if (!title) return;
    dispatch(addNewTodo(title));
    setTitle("");
  };
  const submitHandler = () => {
    createTodo();
  };
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo();
  };

  return (
    <form action="" className="" onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="title"
        placeholder="Task..."
        value={title}
        onChange={handleChange}
        autoComplete="off"
      />
      <input type="button" value="Add todo" onClick={submitHandler} />
    </form>
  );
};

export default TodoFormComp;
