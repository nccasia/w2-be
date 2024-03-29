import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    firstname!: number;

    @Field(() => Int, {nullable:false})
    lastname!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    avatarId!: number;

    @Field(() => Int, {nullable:false})
    googleId!: number;

    @Field(() => Int, {nullable:false})
    googleToken!: number;

    @Field(() => Int, {nullable:false})
    provider!: number;

    @Field(() => Int, {nullable:false})
    fullName!: number;

    @Field(() => Int, {nullable:false})
    branchCode!: number;

    @Field(() => Int, {nullable:false})
    jobPositionCode!: number;

    @Field(() => Int, {nullable:false})
    userTypeName!: number;

    @Field(() => Int, {nullable:false})
    statusName!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
