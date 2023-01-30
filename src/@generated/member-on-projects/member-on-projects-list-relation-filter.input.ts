import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnProjectsWhereInput } from './member-on-projects-where.input';

@InputType()
export class MemberOnProjectsListRelationFilter {

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    every?: MemberOnProjectsWhereInput;

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    some?: MemberOnProjectsWhereInput;

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    none?: MemberOnProjectsWhereInput;
}
