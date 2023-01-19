import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionActivityDefinitionOrderByRelationAggregateInput } from '../task-definition-activity-definition/task-definition-activity-definition-order-by-relation-aggregate.input';

@InputType()
export class ActivityDefinitionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    synchronous?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionActivityDefinitionOrderByRelationAggregateInput, {nullable:true})
    taskDefinitionActivityDefinitions?: TaskDefinitionActivityDefinitionOrderByRelationAggregateInput;
}