import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TaskAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    definitionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assigneeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creatorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}
