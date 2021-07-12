import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TodoFormComp from "../components/todoform";
import TodoListComp from "../components/todolist";
import { fetchTodos } from "../store/todos-actions";
import { ITodo } from "../types";

import Notifications from "../components/notifications/notification";

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

let onLoad = true;

const TodoPageComp = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();
  const notes = useSelector((state: RootStateOrAny) => state.ui.notifications);
  const todos = useSelector((state: RootStateOrAny) => state.todos.todos);
  useEffect(() => {
    if (onLoad) {
      dispatch(fetchTodos());
    }
    onLoad = false;
    return () => {
      console.log("unmounted");
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Badge badgeContent={todos.length} color="secondary">
          <FormatListNumberedIcon style={{ color: '#3f51b5' }} />
        </Badge>
        <Badge badgeContent={todos.filter((t: ITodo) => t.completed).length} color="secondary">
          <CheckCircleIcon style={{ color: '#3f51b5' }} />
        </Badge>
      </div>
      <TodoFormComp />
      <div className="wrapper">
        <TodoListComp todos={todos} />
      </div>
      <Notifications
        title={notes.title}
        message={notes.message}
        status={notes.status}
      />
    </>
  );
};

export default TodoPageComp;