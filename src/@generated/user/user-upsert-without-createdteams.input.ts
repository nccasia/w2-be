import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreatedteamsInput } from './user-update-without-createdteams.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedteamsInput } from './user-create-without-createdteams.input';

@InputType()
export class UserUpsertWithoutCreatedteamsInput {

    @Field(() => UserUpdateWithoutCreatedteamsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCreatedteamsInput)
    update!: UserUpdateWithoutCreatedteamsInput;

    @Field(() => UserCreateWithoutCreatedteamsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedteamsInput)
    create!: UserCreateWithoutCreatedteamsInput;
}
