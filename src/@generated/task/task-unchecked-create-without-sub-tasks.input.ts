import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { CommentUncheckedCreateNestedManyWithoutTaskInput } from '../comment/comment-unchecked-create-nested-many-without-task.input';
import { EventLogUncheckedCreateNestedManyWithoutTaskInput } from '../event-log/event-log-unchecked-create-nested-many-without-task.input';
import { TriggerUncheckedCreateNestedManyWithoutTaskInput } from '../trigger/trigger-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutSubTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => TaskPriority, {nullable:true})
    priority?: keyof typeof TaskPriority;

    @Field(() => Boolean, {nullable:true})
    isActve?: boolean;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    properties?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    typeName?: string;

    @Field(() => String, {nullable:true})
    cta?: string;

    @Field(() => String, {nullable:true})
    ctaName?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    stateName?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    statusName?: string;

    @Field(() => String, {nullable:true})
    stateValues?: string;

    @Field(() => String, {nullable:true})
    descriptionTemplate?: string;

    @Field(() => String, {nullable:true})
    titleTemplate?: string;

    @Field(() => String, {nullable:true})
    statusTemplate?: string;

    @Field(() => String, {nullable:true})
    stateTemplate?: string;

    @Field(() => String, {nullable:true})
    notificationTemplate?: string;

    @Field(() => String, {nullable:true})
    ctaTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    stateConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    statusConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    notificationConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    processConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    ctaConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    definitionId!: number;

    @Field(() => CommentUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput;

    @Field(() => EventLogUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutTaskInput;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => TriggerUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    Trigger?: TriggerUncheckedCreateNestedManyWithoutTaskInput;
}
