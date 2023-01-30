import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedProjectsInput } from './user-create-without-created-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedProjectsInput } from './user-create-or-connect-without-created-projects.input';
import { UserUpsertWithoutCreatedProjectsInput } from './user-upsert-without-created-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreatedProjectsInput } from './user-update-without-created-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutCreatedProjectsNestedInput {

    @Field(() => UserCreateWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedProjectsInput)
    create?: UserCreateWithoutCreatedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProjectsInput;

    @Field(() => UserUpsertWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCreatedProjectsInput)
    upsert?: UserUpsertWithoutCreatedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreatedProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutCreatedProjectsInput)
    update?: UserUpdateWithoutCreatedProjectsInput;
}
