import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreatedProjectsInput } from './user-update-without-created-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedProjectsInput } from './user-create-without-created-projects.input';

@InputType()
export class UserUpsertWithoutCreatedProjectsInput {

    @Field(() => UserUpdateWithoutCreatedProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCreatedProjectsInput)
    update!: UserUpdateWithoutCreatedProjectsInput;

    @Field(() => UserCreateWithoutCreatedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedProjectsInput)
    create!: UserCreateWithoutCreatedProjectsInput;
}
