import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TaskOrderByWithRelationInput } from '../task/task-order-by-with-relation.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';

@InputType()
export class EventLogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    task?: TaskOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    context?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
}
