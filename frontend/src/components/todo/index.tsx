import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutline";
import EditIcon from '@material-ui/icons/Edit';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
    console.log('Edit handler')
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

  // return (
  //   <li>
  //     <span>
  //       {edit ? (
  //         <input type="text" value={todotitle} onChange={handleChange} />
  //       ) : (
  //         props.todo.title
  //       )}
  //     </span>
  //     <span>
  //       <input
  //         type="checkbox"
  //         checked={props.todo.completed}
  //         onChange={completeHandler}
  //       />
  //     </span>
  //     <span>
  //       {edit ? (
  //         <>
  //           <button onClick={updateHandler}>Update</button>
  //           <button
  //             onClick={() => {
  //               setEdit(false);
  //             }}
  //           >
  //             Cancel
  //           </button>
  //         </>
  //       ) : (
  //         <button onClick={editHandler}>Edit</button>
  //       )}{" "}
  //       <button onClick={deleteHandler}>X</button>
  //     </span>
  //   </li>
  // );  

  return (
    <ListItem divider={true}>
      <Checkbox checked={props.todo.completed} onChange={completeHandler} disableRipple />
      <ListItemText primary={props.todo.title} />
      <ListItemIcon>
        <IconButton aria-label="Edit Todo" onClick={editHandler}>
          <EditIcon />
        </IconButton>
      </ListItemIcon>

      <ListItemIcon>
        <IconButton aria-label="Delete Todo" onClick={deleteHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default TodoComp;
