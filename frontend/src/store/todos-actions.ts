import { AppDispatch } from ".";
import { ITodo } from "../types";

import { todosActions } from "./todos-slice";
import { uiAction } from "./ui-slice";

const basePath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9001/todos/"
    : "http://localhost:9001/todos/";

const headers = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  };
};

export const fetchTodos = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiAction.showNotificaion({
        status: "pending",
        title: "Send..",
        message: "Getting Todos...",
      })
    );

    const options = {
      method: "GET",
      headers: headers(),
    };
    const sendRequest = async () => {
      const response = await fetch(basePath, options);
      if (!response.ok) {
        throw new Error("Api failed");
      }
      return response;
    };

    try {
      const response = await sendRequest();
      const responseData = await response.json();
      dispatch(todosActions.listTodos(responseData));
      dispatch(
        uiAction.showNotificaion({
          status: "success",
          title: "Done..",
          message: "Todos fecthed",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotificaion({
          status: "error",
          title: "Error..",
          message: "Error Getting data" + error,
        })
      );
    }
  };
};

export const addNewTodo = (title: string) => {
  return async (dispatch: AppDispatch) => {
    const options = {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    };
    const sendRequest = async () => {
      const response = await fetch(basePath, options);
      if (!response.ok) {
        throw new Error("Api failed");
      }
      return response;
    };
    try {
      const response = await sendRequest();
      const responseData = await response.json();
      dispatch(todosActions.updateTodoList(responseData));
      dispatch(
        uiAction.showNotificaion({
          status: "success",
          title: "Done..",
          message: "New Todo added...",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotificaion({
          status: "error",
          title: "Error..",
          message: "Error Getting data" + error,
        })
      );
    }
  };
};

export const updateTodo = (todo: ITodo) => {
  return async (dispatch: AppDispatch) => {
    const options = {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      }),
    };
    const sendRequest = async () => {
      const response = await fetch(basePath + todo.id, options);
      if (!response.ok) {
        throw new Error("Api failed");
      }
      return response;
    };
    try {
      const response = await sendRequest();
      const responseData = await response.json();
      if (responseData) {
        dispatch(
          todosActions.completeTodoList({
            ...todo,
            title: todo.title,
            completed: todo.completed,
          })
        );
        dispatch(
          uiAction.showNotificaion({
            status: "success",
            title: "Done..",
            message: "Todo updated...",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiAction.showNotificaion({
          status: "error",
          title: "Error..",
          message: "Error Getting data" + error,
        })
      );
    }
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const options = {
      method: "Delete",
      headers: headers(),
    };
    const sendRequest = async () => {
      const response = await fetch(basePath + id, options);
      if (!response.ok) {
        throw new Error("Api failed");
      }
      return response;
    };
    try {
      const response = await sendRequest();
      const responseData = await response.json();
      if (responseData) {
        dispatch(todosActions.updateTodoListAfterDelete(id));
        dispatch(
          uiAction.showNotificaion({
            status: "success",
            title: "Done..",
            message: "Todo deleted...",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiAction.showNotificaion({
          status: "error",
          title: "Error..",
          message: "Error Getting data" + error,
        })
      );
    }
  };
};
