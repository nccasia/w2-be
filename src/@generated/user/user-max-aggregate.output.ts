import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProviderEnum } from '../prisma/provider.enum';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => ProviderEnum, {nullable:true})
    provider?: keyof typeof ProviderEnum;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => String, {nullable:true})
    googleToken?: string;

    @Field(() => Int, {nullable:true})
    avatarId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
}
