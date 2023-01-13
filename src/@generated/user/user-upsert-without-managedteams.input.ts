import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutManagedteamsInput } from './user-update-without-managedteams.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutManagedteamsInput } from './user-create-without-managedteams.input';

@InputType()
export class UserUpsertWithoutManagedteamsInput {

    @Field(() => UserUpdateWithoutManagedteamsInput, {nullable:false})
    @Type(() => UserUpdateWithoutManagedteamsInput)
    update!: UserUpdateWithoutManagedteamsInput;

    @Field(() => UserCreateWithoutManagedteamsInput, {nullable:false})
    @Type(() => UserCreateWithoutManagedteamsInput)
    create!: UserCreateWithoutManagedteamsInput;
}
