import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsWhereInput } from './member-on-projects-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    @Type(() => MemberOnProjectsWhereInput)
    where?: MemberOnProjectsWhereInput;
}
