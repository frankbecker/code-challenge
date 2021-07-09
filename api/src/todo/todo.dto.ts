import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBooleanString } from 'class-validator';

export class NewTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Todo Title' })
  readonly title: string;
  @IsBooleanString()
  @ApiProperty({ type: Boolean, description: 'Todo Completed?' })
  readonly completed: boolean;
}
