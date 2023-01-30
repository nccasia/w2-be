import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRepotedProjectsInput } from './user-update-without-repoted-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRepotedProjectsInput } from './user-create-without-repoted-projects.input';

@InputType()
export class UserUpsertWithoutRepotedProjectsInput {

    @Field(() => UserUpdateWithoutRepotedProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRepotedProjectsInput)
    update!: UserUpdateWithoutRepotedProjectsInput;

    @Field(() => UserCreateWithoutRepotedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutRepotedProjectsInput)
    create!: UserCreateWithoutRepotedProjectsInput;
}
