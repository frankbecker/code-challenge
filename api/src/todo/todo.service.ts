import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { NewTodoDto } from './todo.dto';

const todoProjection = {
  __v: false,
};

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}

  public async getTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find({}, todoProjection).exec();
    if (!todos || !todos[0]) {
      throw new HttpException('Not Found', 404);
    }

    return todos.map((t) => ({
      id: t._id,
      title: t.title,
      completed: t.completed,
    }));
  }

  public async postTodo(newTodo: NewTodoDto) {
    const todo = await this.todoModel.create(newTodo);
    const t = await todo.save();
    return { id: t._id, title: t.title, completed: t.completed };
  }

  public async deleteTodoById(id: string): Promise<number> {
    const todo = await this.todoModel.deleteOne({ _id: id }).exec();
    if (todo.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return todo.deletedCount;
  }
  public async putTodoById(
    id: string,
    newtitle: string,
    completedstatus: boolean,
  ): Promise<Todo> {
    const todo = await this.todoModel
      .findOneAndUpdate(
        { _id: id },
        {
          title: newtitle,
          completed: completedstatus,
        },
      )
      .exec();
    if (!todo) {
      throw new HttpException('Not found', 404);
    }
    return { id: todo._id, title: todo.title, completed: completedstatus };
  }
}
