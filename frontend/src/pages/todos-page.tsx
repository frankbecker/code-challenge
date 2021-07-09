import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TodoFormComp from "../components/todoform";
import TodoListComp from "../components/todolist";
import { fetchTodos } from "../store/todos-actions";
import { ITodo } from "../types";

let onLoad = true;

const TodoPageComp = () => {
  const dispatch = useDispatch();
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
      <div className="todoStats">
        <span>Total todos : {todos.length}</span>
        <span>
          Completed : {todos.filter((t: ITodo) => t.completed).length}
        </span>
      </div>
      <TodoFormComp />
      <div className="wrapper">
        <TodoListComp todos={todos} />
      </div>
    </>
  );
};

export default TodoPageComp;
