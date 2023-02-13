import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TaskCreateManyTeamInput {

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

    @Field(() => Int, {nullable:true})
    definitionId?: number;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

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

    @Field(() => Int, {nullable:true})
    formId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:true})
    reporterId?: number;
}
