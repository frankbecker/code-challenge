import { ITodo } from "../../types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/todos-actions";
import { ChangeEvent, useState } from "react";
type Props = {
  todo: ITodo;
};
const TodoComp = (props: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [todotitle, setTodotitle] = useState<string>(props.todo.title);

  const dispatch = useDispatch();

  const completeHandler = () => {
    dispatch(updateTodo({ ...props.todo, completed: !props.todo.completed }));
  };
  const deleteHandler = () => {
    dispatch(deleteTodo(props.todo.id));
  };
  const editHandler = () => {
    setEdit(!edit);
    setTodotitle(props.todo.title);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodotitle(event.target.value);
  };

  const updateHandler = () => {
    updatetodo();
  };

  const updatetodo = () => {
    dispatch(updateTodo({ ...props.todo, title: todotitle }));
    setEdit(!edit);
    setTodotitle("");
  };

  return (
    <li>
      <span>
        {edit ? (
          <input type="text" value={todotitle} onChange={handleChange} />
        ) : (
          props.todo.title
        )}
      </span>
      <span>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={completeHandler}
        />
      </span>
      <span>
        {edit ? (
          <>
            <button onClick={updateHandler}>Update</button>
            <button
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button onClick={editHandler}>Edit</button>
        )}{" "}
        <button onClick={deleteHandler}>X</button>
      </span>
    </li>
  );
};

export default TodoComp;
