import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectUncheckedCreateNestedManyWithoutTaskDefinitionInput } from '../project/project-unchecked-create-nested-many-without-task-definition.input';
import { TaskUncheckedCreateNestedManyWithoutDefinitionInput } from '../task/task-unchecked-create-nested-many-without-definition.input';
import { TaskBoardUncheckedCreateNestedManyWithoutTaskDefinitionInput } from '../task-board/task-board-unchecked-create-nested-many-without-task-definition.input';
import { TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput } from './task-definition-unchecked-create-nested-many-without-parent-task-definition.input';

@InputType()
export class TaskDefinitionUncheckedCreateWithoutOrganizationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:true})
    formId?: number;

    @Field(() => String, {nullable:true})
    keyTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutDefinitionInput, {nullable:true})
    taskInstances?: TaskUncheckedCreateNestedManyWithoutDefinitionInput;

    @Field(() => TaskBoardUncheckedCreateNestedManyWithoutTaskDefinitionInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedCreateNestedManyWithoutTaskDefinitionInput;

    @Field(() => TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionUncheckedCreateNestedManyWithoutParentTaskDefinitionInput;
}
