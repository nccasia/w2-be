import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionOrderByRelationAggregateInput } from '../task-definition/task-definition-order-by-relation-aggregate.input';

@InputType()
export class FormDefinetionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schema?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validationConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    triggerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serializerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayConfig?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionOrderByRelationAggregateInput, {nullable:true})
    taskDefinitions?: TaskDefinitionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
