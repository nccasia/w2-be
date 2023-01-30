import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskBoardOrderByWithRelationInput } from '../task-board/task-board-order-by-with-relation.input';

@InputType()
export class TaskBoardSettingsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => TaskBoardOrderByWithRelationInput, {nullable:true})
    taskBoard?: TaskBoardOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    taskBoardId?: keyof typeof SortOrder;
}
