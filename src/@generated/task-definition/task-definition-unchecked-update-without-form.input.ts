import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskUncheckedUpdateManyWithoutDefinitionNestedInput } from '../task/task-unchecked-update-many-without-definition-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput } from './task-definition-unchecked-update-many-without-parent-task-definition-nested.input';
import { TaskDefinitionActivityDefinitionUncheckedUpdateManyWithoutTaskDefinitionNestedInput } from '../task-definition-activity-definition/task-definition-activity-definition-unchecked-update-many-without-task-definition-nested.input';
import { ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput } from '../project/project-unchecked-update-many-without-task-definition-nested.input';
import { TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput } from '../task-board/task-board-unchecked-update-many-without-task-definition-nested.input';

@InputType()
export class TaskDefinitionUncheckedUpdateWithoutFormInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    keyTemplate?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => TaskUncheckedUpdateManyWithoutDefinitionNestedInput, {nullable:true})
    taskInstances?: TaskUncheckedUpdateManyWithoutDefinitionNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput;

    @Field(() => TaskDefinitionActivityDefinitionUncheckedUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    taskDefinitionActivityDefinitions?: TaskDefinitionActivityDefinitionUncheckedUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    projects?: ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput;
}
