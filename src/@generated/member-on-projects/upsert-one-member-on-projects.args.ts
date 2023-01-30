import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsCreateInput } from './member-on-projects-create.input';
import { MemberOnProjectsUpdateInput } from './member-on-projects-update.input';

@ArgsType()
export class UpsertOneMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnProjectsWhereUniqueInput)
    where!: MemberOnProjectsWhereUniqueInput;

    @Field(() => MemberOnProjectsCreateInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateInput)
    create!: MemberOnProjectsCreateInput;

    @Field(() => MemberOnProjectsUpdateInput, {nullable:false})
    @Type(() => MemberOnProjectsUpdateInput)
    update!: MemberOnProjectsUpdateInput;
}
