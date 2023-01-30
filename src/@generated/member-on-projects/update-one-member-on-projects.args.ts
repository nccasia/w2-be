import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsUpdateInput } from './member-on-projects-update.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';

@ArgsType()
export class UpdateOneMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsUpdateInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateInput)
    data!: MemberOnProjectsUpdateInput;

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;
}
