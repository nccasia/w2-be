import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormCreateNestedOneWithoutTaskDefinitionsInput } from '../form/form-create-nested-one-without-task-definitions.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskCreateNestedManyWithoutDefinitionInput } from '../task/task-create-nested-many-without-definition.input';
import { OrganizationCreateNestedOneWithoutTaskDefinitionsInput } from '../organization/organization-create-nested-one-without-task-definitions.input';
import { TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput } from './task-definition-create-nested-one-without-sub-task-definitions.input';
import { TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput } from './task-definition-create-nested-many-without-parent-task-definition.input';
import { TaskDefinitionActivityDefinitionCreateNestedManyWithoutTaskDefinitionInput } from '../task-definition-activity-definition/task-definition-activity-definition-create-nested-many-without-task-definition.input';
import { ProjectCreateNestedManyWithoutTaskDefinitionInput } from '../project/project-create-nested-many-without-task-definition.input';
import { TaskBoardCreateNestedManyWithoutTaskDefinitionInput } from '../task-board/task-board-create-nested-many-without-task-definition.input';

@InputType()
export class TaskDefinitionCreateInput {

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

    @Field(() => FormCreateNestedOneWithoutTaskDefinitionsInput, {nullable:true})
    form?: FormCreateNestedOneWithoutTaskDefinitionsInput;

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
    machineConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contextConfig?: any;

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

    @Field(() => TaskDefinitionActivityDefinitionCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    taskDefinitionActivityDefinitions?: TaskDefinitionActivityDefinitionCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => ProjectCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => TaskBoardCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    taskBoards?: TaskBoardCreateNestedManyWithoutTaskDefinitionInput;
}
