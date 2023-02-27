import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectCreateNestedManyWithoutTaskDefinitionInput } from '../project/project-create-nested-many-without-task-definition.input';
import { TaskCreateNestedManyWithoutDefinitionInput } from '../task/task-create-nested-many-without-definition.input';
import { TaskBoardCreateNestedManyWithoutTaskDefinitionInput } from '../task-board/task-board-create-nested-many-without-task-definition.input';
import { TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput } from './task-definition-create-nested-one-without-sub-task-definitions.input';
import { TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput } from './task-definition-create-nested-many-without-parent-task-definition.input';

@InputType()
export class TaskDefinitionCreateInput {

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

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => String, {nullable:true})
    keyTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => ProjectCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => TaskCreateNestedManyWithoutDefinitionInput, {nullable:true})
    taskInstances?: TaskCreateNestedManyWithoutDefinitionInput;

    @Field(() => TaskBoardCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    taskBoards?: TaskBoardCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput, {nullable:true})
    parentTaskDefinition?: TaskDefinitionCreateNestedOneWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput;
}
