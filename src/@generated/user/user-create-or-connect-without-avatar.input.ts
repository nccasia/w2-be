import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';

@InputType()
export class UserCreateOrConnectWithoutAvatarInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAvatarInput, {nullable:false})
    @Type(() => UserCreateWithoutAvatarInput)
    create!: UserCreateWithoutAvatarInput;
}
