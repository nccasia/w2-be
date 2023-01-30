import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';

@InputType()
export class EnumTaskBoardViewTypeFieldUpdateOperationsInput {

    @Field(() => TaskBoardViewType, {nullable:true})
    set?: keyof typeof TaskBoardViewType;
}
