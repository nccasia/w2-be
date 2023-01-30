import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsWhereInput } from './member-on-projects-where.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsOrderByWithRelationInput } from './member-on-projects-order-by-with-relation.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberOnProjectsScalarFieldEnum } from './member-on-projects-scalar-field.enum';

@ArgsType()
export class FindFirstMemberOnProjectsArgs {

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    @Type(() => MemberOnProjectsWhereInput)
    where?: MemberOnProjectsWhereInput;

    @Field(() => [MemberOnProjectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberOnProjectsOrderByWithRelationInput>;

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:true})
    cursor?: MemberOnProjectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemberOnProjectsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MemberOnProjectsScalarFieldEnum>;
}
