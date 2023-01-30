import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRepotedProjectsInput } from './user-create-without-repoted-projects.input';

@InputType()
export class UserCreateOrConnectWithoutRepotedProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRepotedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutRepotedProjectsInput)
    create!: UserCreateWithoutRepotedProjectsInput;
}
