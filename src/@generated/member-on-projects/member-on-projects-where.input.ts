import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MemberOnProjectsWhereInput {

    @Field(() => [MemberOnProjectsWhereInput], {nullable:true})
    AND?: Array<MemberOnProjectsWhereInput>;

    @Field(() => [MemberOnProjectsWhereInput], {nullable:true})
    OR?: Array<MemberOnProjectsWhereInput>;

    @Field(() => [MemberOnProjectsWhereInput], {nullable:true})
    NOT?: Array<MemberOnProjectsWhereInput>;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
