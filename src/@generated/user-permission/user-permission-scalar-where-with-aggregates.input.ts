import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserPermissionScalarWhereWithAggregatesInput {

    @Field(() => [UserPermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserPermissionScalarWhereWithAggregatesInput>;

    @Field(() => [UserPermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserPermissionScalarWhereWithAggregatesInput>;

    @Field(() => [UserPermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserPermissionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    permissionId?: IntWithAggregatesFilter;
}
