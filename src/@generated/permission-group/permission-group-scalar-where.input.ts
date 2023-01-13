import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionGroupScalarWhereInput {

    @Field(() => [PermissionGroupScalarWhereInput], {nullable:true})
    AND?: Array<PermissionGroupScalarWhereInput>;

    @Field(() => [PermissionGroupScalarWhereInput], {nullable:true})
    OR?: Array<PermissionGroupScalarWhereInput>;

    @Field(() => [PermissionGroupScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionGroupScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;
}
