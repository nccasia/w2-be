import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProviderEnum } from '../prisma/provider.enum';

@InputType()
export class UserCreateManyAvatarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => String, {nullable:true})
    googleToken?: string;

    @Field(() => ProviderEnum, {nullable:true})
    provider?: keyof typeof ProviderEnum;
}
