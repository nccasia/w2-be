import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumTaskPriorityFieldUpdateOperationsInput } from '../prisma/enum-task-priority-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CommentUpdateManyWithoutTaskNestedInput } from '../comment/comment-update-many-without-task-nested.input';
import { EventLogUpdateManyWithoutTaskNestedInput } from '../event-log/event-log-update-many-without-task-nested.input';
import { UserUpdateOneWithoutAssignedTasksNestedInput } from '../user/user-update-one-without-assigned-tasks-nested.input';
import { UserUpdateOneRequiredWithoutCreatedTasksNestedInput } from '../user/user-update-one-required-without-created-tasks-nested.input';
import { TaskDefinitionUpdateOneWithoutTaskInstancesNestedInput } from '../task-definition/task-definition-update-one-without-task-instances-nested.input';
import { FormUpdateOneWithoutTasksNestedInput } from '../form/form-update-one-without-tasks-nested.input';
import { OrganizationUpdateOneRequiredWithoutTasksNestedInput } from '../organization/organization-update-one-required-without-tasks-nested.input';
import { TaskUpdateOneWithoutSubTasksNestedInput } from './task-update-one-without-sub-tasks-nested.input';
import { TaskUpdateManyWithoutParentTaskNestedInput } from './task-update-many-without-parent-task-nested.input';
import { ProjectUpdateOneWithoutTasksNestedInput } from '../project/project-update-one-without-tasks-nested.input';
import { UserUpdateOneWithoutReportedTasksNestedInput } from '../user/user-update-one-without-reported-tasks-nested.input';
import { TeamUpdateOneWithoutTasksNestedInput } from '../team/team-update-one-without-tasks-nested.input';

@InputType()
export class TaskUpdateWithoutTriggerInput {

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
    ctaName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    statusName?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cta?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ctaTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    descriptionTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notificationTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    properties?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stateTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateValues?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    statusTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    titleTemplate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutTaskNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutTaskNestedInput;

    @Field(() => EventLogUpdateManyWithoutTaskNestedInput, {nullable:true})
    eventLogs?: EventLogUpdateManyWithoutTaskNestedInput;

    @Field(() => UserUpdateOneWithoutAssignedTasksNestedInput, {nullable:true})
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCreatedTasksNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput;

    @Field(() => TaskDefinitionUpdateOneWithoutTaskInstancesNestedInput, {nullable:true})
    definition?: TaskDefinitionUpdateOneWithoutTaskInstancesNestedInput;

    @Field(() => FormUpdateOneWithoutTasksNestedInput, {nullable:true})
    form?: FormUpdateOneWithoutTasksNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;

    @Field(() => TaskUpdateOneWithoutSubTasksNestedInput, {nullable:true})
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;

    @Field(() => TaskUpdateManyWithoutParentTaskNestedInput, {nullable:true})
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;

    @Field(() => ProjectUpdateOneWithoutTasksNestedInput, {nullable:true})
    project?: ProjectUpdateOneWithoutTasksNestedInput;

    @Field(() => UserUpdateOneWithoutReportedTasksNestedInput, {nullable:true})
    reporter?: UserUpdateOneWithoutReportedTasksNestedInput;

    @Field(() => TeamUpdateOneWithoutTasksNestedInput, {nullable:true})
    team?: TeamUpdateOneWithoutTasksNestedInput;
}
