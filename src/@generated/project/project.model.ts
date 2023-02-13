import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberOnProjects } from '../member-on-projects/member-on-projects.model';
import { User } from '../user/user.model';
import { Organization } from '../organization/organization.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { ProjectSettings } from '../project-settings/project-settings.model';
import { Task } from '../task/task.model';
import { TaskBoard } from '../task-board/task-board.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => Int, {nullable:false})
    reporterId!: number;

    @Field(() => [MemberOnProjects], {nullable:true})
    members?: Array<MemberOnProjects>;

    @Field(() => User, {nullable:false})
    creator?: User;

    @Field(() => User, {nullable:false})
    manager?: User;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => User, {nullable:false})
    reporter?: User;

    @Field(() => TaskDefinition, {nullable:false})
    taskDefinition?: TaskDefinition;

    @Field(() => [ProjectSettings], {nullable:true})
    settings?: Array<ProjectSettings>;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => [TaskBoard], {nullable:true})
    taskBoards?: Array<TaskBoard>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
