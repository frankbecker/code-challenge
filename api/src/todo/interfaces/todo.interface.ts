import { Document } from 'mongoose';

export interface TodoType extends Document {
  id: string;
  title: string;
  completed: boolean;
}
