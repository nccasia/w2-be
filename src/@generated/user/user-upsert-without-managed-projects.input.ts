import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutManagedProjectsInput } from './user-update-without-managed-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutManagedProjectsInput } from './user-create-without-managed-projects.input';

@InputType()
export class UserUpsertWithoutManagedProjectsInput {

    @Field(() => UserUpdateWithoutManagedProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutManagedProjectsInput)
    update!: UserUpdateWithoutManagedProjectsInput;

    @Field(() => UserCreateWithoutManagedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutManagedProjectsInput)
    create!: UserCreateWithoutManagedProjectsInput;
}
