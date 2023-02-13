import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { CommentCreateNestedManyWithoutTaskInput } from '../comment/comment-create-nested-many-without-task.input';
import { EventLogCreateNestedManyWithoutTaskInput } from '../event-log/event-log-create-nested-many-without-task.input';
import { UserCreateNestedOneWithoutAssignedTasksInput } from '../user/user-create-nested-one-without-assigned-tasks.input';
import { UserCreateNestedOneWithoutCreatedTasksInput } from '../user/user-create-nested-one-without-created-tasks.input';
import { TaskDefinitionCreateNestedOneWithoutTaskInstancesInput } from '../task-definition/task-definition-create-nested-one-without-task-instances.input';
import { FormCreateNestedOneWithoutTasksInput } from '../form/form-create-nested-one-without-tasks.input';
import { OrganizationCreateNestedOneWithoutTasksInput } from '../organization/organization-create-nested-one-without-tasks.input';
import { TaskCreateNestedOneWithoutSubTasksInput } from './task-create-nested-one-without-sub-tasks.input';
import { TaskCreateNestedManyWithoutParentTaskInput } from './task-create-nested-many-without-parent-task.input';
import { UserCreateNestedOneWithoutReportedTasksInput } from '../user/user-create-nested-one-without-reported-tasks.input';
import { TeamCreateNestedOneWithoutTasksInput } from '../team/team-create-nested-one-without-tasks.input';
import { TriggerCreateNestedManyWithoutTaskInput } from '../trigger/trigger-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutProjectInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => TaskPriority, {nullable:true})
    priority?: keyof typeof TaskPriority;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => String, {nullable:true})
    ctaName?: string;

    @Field(() => String, {nullable:true})
    stateName?: string;

    @Field(() => String, {nullable:true})
    statusName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => String, {nullable:true})
    cta?: string;

    @Field(() => String, {nullable:true})
    ctaTemplate?: string;

    @Field(() => String, {nullable:true})
    descriptionTemplate?: string;

    @Field(() => String, {nullable:true})
    notificationTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    properties?: any;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    stateTemplate?: string;

    @Field(() => String, {nullable:true})
    stateValues?: string;

    @Field(() => String, {nullable:true})
    statusTemplate?: string;

    @Field(() => String, {nullable:true})
    titleTemplate?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    typeName?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig?: any;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => CommentCreateNestedManyWithoutTaskInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutTaskInput;

    @Field(() => EventLogCreateNestedManyWithoutTaskInput, {nullable:true})
    eventLogs?: EventLogCreateNestedManyWithoutTaskInput;

    @Field(() => UserCreateNestedOneWithoutAssignedTasksInput, {nullable:true})
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput;

    @Field(() => UserCreateNestedOneWithoutCreatedTasksInput, {nullable:false})
    creator!: UserCreateNestedOneWithoutCreatedTasksInput;

    @Field(() => TaskDefinitionCreateNestedOneWithoutTaskInstancesInput, {nullable:true})
    definition?: TaskDefinitionCreateNestedOneWithoutTaskInstancesInput;

    @Field(() => FormCreateNestedOneWithoutTasksInput, {nullable:true})
    form?: FormCreateNestedOneWithoutTasksInput;

    @Field(() => OrganizationCreateNestedOneWithoutTasksInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutTasksInput;

    @Field(() => TaskCreateNestedOneWithoutSubTasksInput, {nullable:true})
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;

    @Field(() => TaskCreateNestedManyWithoutParentTaskInput, {nullable:true})
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;

    @Field(() => UserCreateNestedOneWithoutReportedTasksInput, {nullable:true})
    reporter?: UserCreateNestedOneWithoutReportedTasksInput;

    @Field(() => TeamCreateNestedOneWithoutTasksInput, {nullable:true})
    team?: TeamCreateNestedOneWithoutTasksInput;

    @Field(() => TriggerCreateNestedManyWithoutTaskInput, {nullable:true})
    Trigger?: TriggerCreateNestedManyWithoutTaskInput;
}
