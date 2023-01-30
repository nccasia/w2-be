import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateWithoutProjectInput } from './member-on-projects-create-without-project.input';

@InputType()
export class MemberOnProjectsCreateOrConnectWithoutProjectInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsCreateWithoutProjectInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateWithoutProjectInput)
    create!: MemberOnProjectsCreateWithoutProjectInput;
}
