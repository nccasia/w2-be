import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionScalarWhereInput {

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    AND?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    OR?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionGroupId?: IntFilter;
}
