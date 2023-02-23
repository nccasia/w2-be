import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { EventLog } from '../event-log/event-log.model';
import { User } from '../user/user.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { Form } from '../form/form.model';
import { Organization } from '../organization/organization.model';
import { Project } from '../project/project.model';
import { Team } from '../team/team.model';
import { Trigger } from '../trigger/trigger.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => TaskPriority, {nullable:false,defaultValue:'LOW'})
    priority!: keyof typeof TaskPriority;

    @Field(() => GraphQLJSON, {nullable:true})
    values!: any | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    ctaName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    stateName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    statusName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    definitionId!: number | null;

    @Field(() => Int, {nullable:true})
    assigneeId!: number | null;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Int, {nullable:true})
    organizationId!: number | null;

    @Field(() => Int, {nullable:true})
    teamId!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    config!: any | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    cta!: string;

    @Field(() => String, {nullable:true})
    ctaTemplate!: string | null;

    @Field(() => String, {nullable:true})
    descriptionTemplate!: string | null;

    @Field(() => String, {nullable:true})
    notificationTemplate!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    properties!: any | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    state!: string;

    @Field(() => String, {nullable:true})
    stateTemplate!: string | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    stateValues!: string;

    @Field(() => String, {nullable:true})
    statusTemplate!: string | null;

    @Field(() => String, {nullable:true})
    titleTemplate!: string | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    type!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    typeName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    status!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig!: any | null;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:true})
    formId!: number | null;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => Int, {nullable:true})
    reporterId!: number | null;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [EventLog], {nullable:true})
    eventLogs?: Array<EventLog>;

    @Field(() => User, {nullable:true})
    assignee?: User | null;

    @Field(() => User, {nullable:false})
    creator?: User;

    @Field(() => TaskDefinition, {nullable:true})
    definition?: TaskDefinition | null;

    @Field(() => Form, {nullable:true})
    form?: Form | null;

    @Field(() => Organization, {nullable:true})
    organization?: Organization | null;

    @Field(() => Task, {nullable:true})
    parentTask?: Task | null;

    @Field(() => [Task], {nullable:true})
    subTasks?: Array<Task>;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => User, {nullable:true})
    reporter?: User | null;

    @Field(() => Team, {nullable:true})
    team?: Team | null;

    @Field(() => [Trigger], {nullable:true})
    Trigger?: Array<Trigger>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
