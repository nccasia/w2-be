import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { PermissionGroupOrderByWithRelationInput } from '../permission-group/permission-group-order-by-with-relation.input';
import { UserPermissionOrderByRelationAggregateInput } from '../user-permission/user-permission-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionGroupId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => PermissionGroupOrderByWithRelationInput, {nullable:true})
    permissionGroup?: PermissionGroupOrderByWithRelationInput;

    @Field(() => UserPermissionOrderByRelationAggregateInput, {nullable:true})
    userPermissions?: UserPermissionOrderByRelationAggregateInput;
}
