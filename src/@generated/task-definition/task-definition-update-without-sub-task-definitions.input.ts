import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectUpdateManyWithoutTaskDefinitionNestedInput } from '../project/project-update-many-without-task-definition-nested.input';
import { TaskUpdateManyWithoutDefinitionNestedInput } from '../task/task-update-many-without-definition-nested.input';
import { TaskBoardUpdateManyWithoutTaskDefinitionNestedInput } from '../task-board/task-board-update-many-without-task-definition-nested.input';
import { FormUpdateOneWithoutTaskDefinitionsNestedInput } from '../form/form-update-one-without-task-definitions-nested.input';
import { OrganizationUpdateOneRequiredWithoutTaskDefinitionsNestedInput } from '../organization/organization-update-one-required-without-task-definitions-nested.input';
import { TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput } from './task-definition-update-one-without-sub-task-definitions-nested.input';

@InputType()
export class TaskDefinitionUpdateWithoutSubTaskDefinitionsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    descriptionTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    titleTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    statusTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stateTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notificationTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ctaTemplate?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => GraphQLJSON, {nullable:true})
    stateConfig?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    keyTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contextConfig?: any;

    @Field(() => ProjectUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskUpdateManyWithoutDefinitionNestedInput, {nullable:true})
    taskInstances?: TaskUpdateManyWithoutDefinitionNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => FormUpdateOneWithoutTaskDefinitionsNestedInput, {nullable:true})
    form?: FormUpdateOneWithoutTaskDefinitionsNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutTaskDefinitionsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutTaskDefinitionsNestedInput;

    @Field(() => TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput, {nullable:true})
    parentTaskDefinition?: TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput;
}
