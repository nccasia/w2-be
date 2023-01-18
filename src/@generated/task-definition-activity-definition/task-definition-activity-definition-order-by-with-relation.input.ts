import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionOrderByWithRelationInput } from '../task-definition/task-definition-order-by-with-relation.input';
import { ActivityDefinitionOrderByWithRelationInput } from '../activity-definition/activity-definition-order-by-with-relation.input';

@InputType()
export class TaskDefinitionActivityDefinitionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskDefinitionId?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionOrderByWithRelationInput, {nullable:true})
    taskDefinition?: TaskDefinitionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    activityDefinitionId?: keyof typeof SortOrder;

    @Field(() => ActivityDefinitionOrderByWithRelationInput, {nullable:true})
    activityDefinition?: ActivityDefinitionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
