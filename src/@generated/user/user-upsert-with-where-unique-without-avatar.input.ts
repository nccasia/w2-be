import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAvatarInput } from './user-update-without-avatar.input';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutAvatarInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAvatarInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvatarInput)
    update!: UserUpdateWithoutAvatarInput;

    @Field(() => UserCreateWithoutAvatarInput, {nullable:false})
    @Type(() => UserCreateWithoutAvatarInput)
    create!: UserCreateWithoutAvatarInput;
}
