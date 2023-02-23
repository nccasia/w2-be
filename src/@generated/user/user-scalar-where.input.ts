import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { EnumProviderEnumFilter } from '../prisma/enum-provider-enum-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    organizationId?: IntNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    avatarId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleToken?: StringNullableFilter;

    @Field(() => EnumProviderEnumFilter, {nullable:true})
    provider?: EnumProviderEnumFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fullName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    branchCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    jobPositionCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userTypeName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    statusName?: StringNullableFilter;
}
