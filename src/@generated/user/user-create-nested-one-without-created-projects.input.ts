import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedProjectsInput } from './user-create-without-created-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedProjectsInput } from './user-create-or-connect-without-created-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreatedProjectsInput {

    @Field(() => UserCreateWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedProjectsInput)
    create?: UserCreateWithoutCreatedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
