import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRepotedProjectsInput } from './user-create-without-repoted-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRepotedProjectsInput } from './user-create-or-connect-without-repoted-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRepotedProjectsInput {

    @Field(() => UserCreateWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutRepotedProjectsInput)
    create?: UserCreateWithoutRepotedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutRepotedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRepotedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRepotedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
