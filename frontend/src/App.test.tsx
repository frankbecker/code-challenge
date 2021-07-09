import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

test("renders learn react link", () => {
  const initialState = { ui: { notifications: [] }, todos: { todos: [] } };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/TodoApp/i);
  expect(linkElement).toBeInTheDocument();
});
