import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsUpdateWithoutProjectInput } from './member-on-projects-update-without-project.input';

@InputType()
export class MemberOnProjectsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateWithoutProjectInput)
    data!: MemberOnProjectsUpdateWithoutProjectInput;
}
