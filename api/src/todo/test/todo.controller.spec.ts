import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from '../toto.controller';
import { TodoService } from '../todo.service';
import { todoStub } from './stubs/todo.stub';
import { Todo } from '../schemas/todo.schema';

jest.mock('../todo.service');

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = app.get<TodoController>(TodoController);
    todoService = app.get<TodoService>(TodoService);
    jest.clearAllMocks();
  });

  describe('fetchTodos', () => {
    describe('when getTodos is called ', () => {
      let todos: Todo[];
      beforeEach(async () => {
        todos = await todoController.getTodos();
      });
      test('then it should call todoService', () => {
        expect(todoService.getTodos).toHaveBeenCalled();
      });
      test('then it should return todos', () => {
        expect(todos).toEqual([todoStub()]);
      });
    });
  });
});
