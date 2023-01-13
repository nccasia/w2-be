import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumTaskPriorityFieldUpdateOperationsInput } from '../prisma/enum-task-priority-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskDefinitionUpdateOneRequiredWithoutTaskInstancesNestedInput } from '../task-definition/task-definition-update-one-required-without-task-instances-nested.input';
import { CommentUpdateManyWithoutTaskNestedInput } from '../comment/comment-update-many-without-task-nested.input';
import { EventLogUpdateManyWithoutTaskNestedInput } from '../event-log/event-log-update-many-without-task-nested.input';
import { UserUpdateOneRequiredWithoutAssignedTasksNestedInput } from '../user/user-update-one-required-without-assigned-tasks-nested.input';
import { UserUpdateOneRequiredWithoutCreatedTasksNestedInput } from '../user/user-update-one-required-without-created-tasks-nested.input';
import { TaskUpdateOneWithoutSubTasksNestedInput } from './task-update-one-without-sub-tasks-nested.input';
import { TaskUpdateManyWithoutParentTaskNestedInput } from './task-update-many-without-parent-task-nested.input';
import { TeamUpdateOneRequiredWithoutTasksNestedInput } from '../team/team-update-one-required-without-tasks-nested.input';

@InputType()
export class TaskUpdateWithoutOrganizationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumTaskPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: EnumTaskPriorityFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cta?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ctaName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateValues?: StringFieldUpdateOperationsInput;

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TaskDefinitionUpdateOneRequiredWithoutTaskInstancesNestedInput, {nullable:true})
    definition?: TaskDefinitionUpdateOneRequiredWithoutTaskInstancesNestedInput;

    @Field(() => CommentUpdateManyWithoutTaskNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutTaskNestedInput;

    @Field(() => EventLogUpdateManyWithoutTaskNestedInput, {nullable:true})
    eventLogs?: EventLogUpdateManyWithoutTaskNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAssignedTasksNestedInput, {nullable:true})
    assignee?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCreatedTasksNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput;

    @Field(() => TaskUpdateOneWithoutSubTasksNestedInput, {nullable:true})
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;

    @Field(() => TaskUpdateManyWithoutParentTaskNestedInput, {nullable:true})
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;

    @Field(() => TeamUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    team?: TeamUpdateOneRequiredWithoutTasksNestedInput;
}
