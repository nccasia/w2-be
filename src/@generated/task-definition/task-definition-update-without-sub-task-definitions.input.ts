import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectUpdateManyWithoutTaskDefinitionNestedInput } from '../project/project-update-many-without-task-definition-nested.input';
import { TaskUpdateManyWithoutDefinitionNestedInput } from '../task/task-update-many-without-definition-nested.input';
import { TaskBoardUpdateManyWithoutTaskDefinitionNestedInput } from '../task-board/task-board-update-many-without-task-definition-nested.input';
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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    keyTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => ProjectUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskUpdateManyWithoutDefinitionNestedInput, {nullable:true})
    taskInstances?: TaskUpdateManyWithoutDefinitionNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutTaskDefinitionNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutTaskDefinitionNestedInput;

    @Field(() => TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput, {nullable:true})
    parentTaskDefinition?: TaskDefinitionUpdateOneWithoutSubTaskDefinitionsNestedInput;
}
