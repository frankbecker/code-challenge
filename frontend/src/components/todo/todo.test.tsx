import React from "react";
import { render, screen } from "@testing-library/react";
import TodoComp from ".";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

test("renders learn react link", () => {
  const initialState = { ui: { notifications: [] }, todos: { todos: [] } };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <TodoComp todo={{ id: "ad1", title: "test", completed: false }} />
    </Provider>
  );
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
