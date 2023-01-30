import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRepotedProjectsInput } from './user-create-without-repoted-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRepotedProjectsInput } from './user-create-or-connect-without-repoted-projects.input';
import { UserUpsertWithoutRepotedProjectsInput } from './user-upsert-without-repoted-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRepotedProjectsInput } from './user-update-without-repoted-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutRepotedProjectsNestedInput {

    @Field(() => UserCreateWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutRepotedProjectsInput)
    create?: UserCreateWithoutRepotedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRepotedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRepotedProjectsInput;

    @Field(() => UserUpsertWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRepotedProjectsInput)
    upsert?: UserUpsertWithoutRepotedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutRepotedProjectsInput)
    update?: UserUpdateWithoutRepotedProjectsInput;
}
