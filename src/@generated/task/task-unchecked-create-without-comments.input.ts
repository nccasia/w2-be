import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { EventLogUncheckedCreateNestedManyWithoutTaskInput } from '../event-log/event-log-unchecked-create-nested-many-without-task.input';
import { TaskUncheckedCreateNestedManyWithoutParentTaskInput } from './task-unchecked-create-nested-many-without-parent-task.input';

@InputType()
export class TaskUncheckedCreateWithoutCommentsInput {

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
    config?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    definitionId!: number;

    @Field(() => EventLogUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutTaskInput;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => TaskUncheckedCreateNestedManyWithoutParentTaskInput, {nullable:true})
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    teamId!: number;
}
