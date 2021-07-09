import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types";
import { current } from "@reduxjs/toolkit";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    listTodos: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    completeTodoList: (state, action) => {
      console.log(current(state), action);
      const copyState = current(state);
      const updatedTodoList = copyState.todos.map((t) => ({
        ...t,
        title: t.id === action.payload.id ? action.payload.title : t.title,
        completed:
          t.id === action.payload.id ? action.payload.completed : t.completed,
      }));
      console.log("updatedTodoList", updatedTodoList);
      return {
        ...state,
        todos: updatedTodoList,
      };
    },
    updateTodoList: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    updateTodoListAfterDelete: (state, action) => {
      const updatedTodos = state.todos.filter((t) => {
        return t.id !== action.payload;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice;
