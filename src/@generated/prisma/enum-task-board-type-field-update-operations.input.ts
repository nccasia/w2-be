import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardType } from './task-board-type.enum';

@InputType()
export class EnumTaskBoardTypeFieldUpdateOperationsInput {

    @Field(() => TaskBoardType, {nullable:true})
    set?: keyof typeof TaskBoardType;
}
