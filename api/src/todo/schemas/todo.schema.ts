import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  id: String;
  @Prop()
  title: String;
  @Prop()
  completed: Boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
