import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class ProjectSettingsWhereInput {

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    AND?: Array<ProjectSettingsWhereInput>;

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    OR?: Array<ProjectSettingsWhereInput>;

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    NOT?: Array<ProjectSettingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;
}
