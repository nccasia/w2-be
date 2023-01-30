import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutManagedProjectsInput } from './user-create-without-managed-projects.input';

@InputType()
export class UserCreateOrConnectWithoutManagedProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutManagedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutManagedProjectsInput)
    create!: UserCreateWithoutManagedProjectsInput;
}
