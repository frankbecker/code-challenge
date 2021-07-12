import { List, Paper } from "@material-ui/core";

import { ITodo } from "../../types";
import TodoComp from "../todo";
//import "./todolist.scss";

type TodoListCompProps = {
  todos: ITodo[];
};
const TodoListComp = (props: TodoListCompProps) => {
  const todos = JSON.parse(JSON.stringify(props.todos));

  return (
    <Paper >
      <List style={{ overflow: "scroll" }}>
        {todos.map((t: ITodo) => (
          <TodoComp key={t.id} todo={t} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoListComp;