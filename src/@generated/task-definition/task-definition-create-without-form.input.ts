import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskCreateNestedManyWithoutDefinitionInput } from '../task/task-create-nested-many-without-definition.input';
import { OrganizationCreateNestedOneWithoutTaskDefinitionsInput } from '../organization/organization-create-nested-one-without-task-definitions.input';
import { TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput } from './task-definition-create-nested-one-without-sub-task-definitions.input';
import { TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput } from './task-definition-create-nested-many-without-parent-task-definition.input';
import { WorkflowCreateNestedOneWithoutTaskDefinitionsInput } from '../workflow/workflow-create-nested-one-without-task-definitions.input';
import { ActivityCreateNestedOneWithoutTaskDefinitionsInput } from '../activity/activity-create-nested-one-without-task-definitions.input';

@InputType()
export class TaskDefinitionCreateWithoutFormInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

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

    @Field(() => TaskCreateNestedManyWithoutDefinitionInput, {nullable:true})
    taskInstances?: TaskCreateNestedManyWithoutDefinitionInput;

    @Field(() => OrganizationCreateNestedOneWithoutTaskDefinitionsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput, {nullable:true})
    parentTaskDefinition?: TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput;

    @Field(() => WorkflowCreateNestedOneWithoutTaskDefinitionsInput, {nullable:true})
    workflow?: WorkflowCreateNestedOneWithoutTaskDefinitionsInput;

    @Field(() => ActivityCreateNestedOneWithoutTaskDefinitionsInput, {nullable:true})
    activity?: ActivityCreateNestedOneWithoutTaskDefinitionsInput;
}
