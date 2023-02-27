import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput } from '../project/project-unchecked-update-many-without-task-definition-nested.input';
import { TaskUncheckedUpdateManyWithoutDefinitionNestedInput } from '../task/task-unchecked-update-many-without-definition-nested.input';
import { TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput } from '../task-board/task-board-unchecked-update-many-without-task-definition-nested.input';
import { TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput } from './task-definition-unchecked-update-many-without-parent-task-definition-nested.input';

@InputType()
export class TaskDefinitionUncheckedUpdateWithoutParentTaskDefinitionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    keyTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    projects?: ProjectUncheckedUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutDefinitionNestedInput, {nullable:true})
    taskInstances?: TaskUncheckedUpdateManyWithoutDefinitionNestedInput;

    @Field(() => TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionUncheckedUpdateManyWithoutParentTaskDefinitionNestedInput;
}
