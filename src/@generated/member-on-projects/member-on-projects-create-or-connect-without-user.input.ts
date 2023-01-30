import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateWithoutUserInput } from './member-on-projects-create-without-user.input';

@InputType()
export class MemberOnProjectsCreateOrConnectWithoutUserInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsCreateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateWithoutUserInput)
    create!: MemberOnProjectsCreateWithoutUserInput;
}
