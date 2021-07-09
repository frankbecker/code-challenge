import { Todo } from '../../schemas/todo.schema';

export const todoStub = (): Todo => {
  return {
    id: '1a4gds',
    title: 'Test todo',
    completed: false,
  };
};
