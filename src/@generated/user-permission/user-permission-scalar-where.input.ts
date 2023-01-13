import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserPermissionScalarWhereInput {

    @Field(() => [UserPermissionScalarWhereInput], {nullable:true})
    AND?: Array<UserPermissionScalarWhereInput>;

    @Field(() => [UserPermissionScalarWhereInput], {nullable:true})
    OR?: Array<UserPermissionScalarWhereInput>;

    @Field(() => [UserPermissionScalarWhereInput], {nullable:true})
    NOT?: Array<UserPermissionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;
}
