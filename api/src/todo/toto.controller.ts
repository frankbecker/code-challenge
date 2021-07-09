import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { NewTodoDto } from './todo.dto';
import { TodoService } from './todo.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOkResponse({
    description: 'Fetch todo list.',
  })
  public async getTodos() {
    return await this.todoService.getTodos();
  }

  @Post()
  @ApiOkResponse({
    description: 'Create new todo',
  })
  @ApiBody({ type: NewTodoDto })
  public async postTodos(@Body() newtodo: NewTodoDto) {
    return await this.todoService.postTodo(newtodo);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete todo by Id',
  })
  public async deleteTodoById(@Param('id') id: string) {
    return await this.todoService.deleteTodoById(id);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Update todo by Id.',
  })
  public async putTodoById(@Param('id') id: string, @Body() body) {
    console.log('query', id, body);
    const title = body.title;
    const completed = body.completed;
    return await this.todoService.putTodoById(id, title, completed);
  }
}
