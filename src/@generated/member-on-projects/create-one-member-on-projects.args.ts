import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsCreateInput } from './member-on-projects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsCreateInput, {nullable:false})
    @Type(() => MemberOnProjectsCreateInput)
    data!: MemberOnProjectsCreateInput;
}
