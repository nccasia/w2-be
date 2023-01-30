import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedProjectsInput } from './user-create-without-created-projects.input';

@InputType()
export class UserCreateOrConnectWithoutCreatedProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreatedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedProjectsInput)
    create!: UserCreateWithoutCreatedProjectsInput;
}
