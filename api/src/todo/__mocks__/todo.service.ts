import { todoStub } from '../test/stubs/todo.stub';

export const TodoService = jest.fn().mockReturnValue({
  getTodos: jest.fn().mockResolvedValue([todoStub()]),
  postTodo: jest.fn().mockResolvedValue(todoStub),
  deleteTodoById: jest.fn().mockResolvedValue(1),
  putTodoById: jest.fn().mockResolvedValue(todoStub),
});
