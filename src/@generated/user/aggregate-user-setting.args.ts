import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingWhereInput } from '../user-setting/user-setting-where.input';
import { Type } from 'class-transformer';
import { UserSettingOrderByWithRelationInput } from '../user-setting/user-setting-order-by-with-relation.input';
import { UserSettingWhereUniqueInput } from '../user-setting/user-setting-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateUserSettingArgs {

    @Field(() => UserSettingWhereInput, {nullable:true})
    @Type(() => UserSettingWhereInput)
    where?: UserSettingWhereInput;

    @Field(() => [UserSettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserSettingOrderByWithRelationInput>;

    @Field(() => UserSettingWhereUniqueInput, {nullable:true})
    cursor?: UserSettingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
