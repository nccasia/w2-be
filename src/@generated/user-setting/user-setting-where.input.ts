import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserSettingWhereInput {

    @Field(() => [UserSettingWhereInput], {nullable:true})
    AND?: Array<UserSettingWhereInput>;

    @Field(() => [UserSettingWhereInput], {nullable:true})
    OR?: Array<UserSettingWhereInput>;

    @Field(() => [UserSettingWhereInput], {nullable:true})
    NOT?: Array<UserSettingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
