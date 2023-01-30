import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsUpdateWithoutProjectInput } from './member-on-projects-update-without-project.input';
import { MemberOnProjectsCreateWithoutProjectInput } from './member-on-projects-create-without-project.input';

@InputType()
export class MemberOnProjectsUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateWithoutProjectInput)
    update!: MemberOnProjectsUpdateWithoutProjectInput;

    @Field(() => MemberOnProjectsCreateWithoutProjectInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateWithoutProjectInput)
    create!: MemberOnProjectsCreateWithoutProjectInput;
}
