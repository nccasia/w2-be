import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput } from './task-definition-unchecked-create-nested-many-without-parent-task-definition.input';
import { TaskDefinitionActivityDefinitionUncheckedCreateNestedManyWithoutTaskDefinitionInput } from '../task-definition-activity-definition/task-definition-activity-definition-unchecked-create-nested-many-without-task-definition.input';

@InputType()
export class TaskDefinitionUncheckedCreateWithoutTaskInstancesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    keyTemplate?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

    @Field(() => Int, {nullable:true})
    formId?: number;

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

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput;

    @Field(() => TaskDefinitionActivityDefinitionUncheckedCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    taskDefinitionActivityDefinitions?: TaskDefinitionActivityDefinitionUncheckedCreateNestedManyWithoutTaskDefinitionInput;
}
