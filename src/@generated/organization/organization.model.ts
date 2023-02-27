import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EventLog } from '../event-log/event-log.model';
import { File } from '../file/file.model';
import { Permission } from '../permission/permission.model';
import { PermissionGroup } from '../permission-group/permission-group.model';
import { Project } from '../project/project.model';
import { Resource } from '../resource/resource.model';
import { Settings } from '../settings/settings.model';
import { Task } from '../task/task.model';
import { TaskBoard } from '../task-board/task-board.model';
import { Team } from '../team/team.model';
import { User } from '../user/user.model';
import { OrganizationCount } from './organization-count.output';

@ObjectType()
export class Organization {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [EventLog], {nullable:true})
    eventLogs?: Array<EventLog>;

    @Field(() => [File], {nullable:true})
    files?: Array<File>;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => [PermissionGroup], {nullable:true})
    permissionGroups?: Array<PermissionGroup>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => [Resource], {nullable:true})
    resources?: Array<Resource>;

    @Field(() => [Settings], {nullable:true})
    settings?: Array<Settings>;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => [TaskBoard], {nullable:true})
    taskBoards?: Array<TaskBoard>;

    @Field(() => [Team], {nullable:true})
    teams?: Array<Team>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => OrganizationCount, {nullable:false})
    _count?: OrganizationCount;
}
