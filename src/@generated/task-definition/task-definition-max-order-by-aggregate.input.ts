import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TaskDefinitionMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    descriptionTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    titleTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    keyTemplate?: keyof typeof SortOrder;
}
