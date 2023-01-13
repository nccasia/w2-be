import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';

@InputType()
export class UserPermissionWhereInput {

    @Field(() => [UserPermissionWhereInput], {nullable:true})
    AND?: Array<UserPermissionWhereInput>;

    @Field(() => [UserPermissionWhereInput], {nullable:true})
    OR?: Array<UserPermissionWhereInput>;

    @Field(() => [UserPermissionWhereInput], {nullable:true})
    NOT?: Array<UserPermissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;
}
