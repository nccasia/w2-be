import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { Comment } from '../comment/comment.model';
import { EventLog } from '../event-log/event-log.model';
import { Form } from '../form/form.model';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';
import { Organization } from '../organization/organization.model';
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

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isActive!: boolean;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    properties!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    values!: any | null;

    @Field(() => String, {nullable:false,defaultValue:''})
    type!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    typeName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    cta!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    ctaName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    state!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    stateName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    status!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    statusName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    stateValues!: string;

    @Field(() => String, {nullable:true})
    descriptionTemplate!: string | null;

    @Field(() => String, {nullable:true})
    titleTemplate!: string | null;

    @Field(() => String, {nullable:true})
    statusTemplate!: string | null;

    @Field(() => String, {nullable:true})
    stateTemplate!: string | null;

    @Field(() => String, {nullable:true})
    notificationTemplate!: string | null;

    @Field(() => String, {nullable:true})
    ctaTemplate!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    stateConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    statusConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    notificationConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    processConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    ctaConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    config!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    definitionId!: number;

    @Field(() => TaskDefinition, {nullable:false})
    definition?: TaskDefinition;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [EventLog], {nullable:true})
    eventLogs?: Array<EventLog>;

    @Field(() => Int, {nullable:true})
    formId!: number | null;

    @Field(() => Form, {nullable:true})
    form?: Form | null;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => Int, {nullable:true})
    assigneeId!: number | null;

    @Field(() => User, {nullable:true})
    assignee?: User | null;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => User, {nullable:false})
    creator?: User;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Task, {nullable:true})
    parentTask?: Task | null;

    @Field(() => [Task], {nullable:true})
    subTasks?: Array<Task>;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:true})
    reporterId!: number | null;

    @Field(() => User, {nullable:true})
    reporter?: User | null;

    @Field(() => Int, {nullable:true})
    teamId!: number | null;

    @Field(() => Team, {nullable:true})
    team?: Team | null;

    @Field(() => [Trigger], {nullable:true})
    Trigger?: Array<Trigger>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
