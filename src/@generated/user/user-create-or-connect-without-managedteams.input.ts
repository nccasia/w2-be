import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutManagedteamsInput } from './user-create-without-managedteams.input';

@InputType()
export class UserCreateOrConnectWithoutManagedteamsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutManagedteamsInput, {nullable:false})
    @Type(() => UserCreateWithoutManagedteamsInput)
    create!: UserCreateWithoutManagedteamsInput;
}
