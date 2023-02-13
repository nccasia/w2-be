import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventLogUpdateManyWithoutOrganizationNestedInput } from '../event-log/event-log-update-many-without-organization-nested.input';
import { FileUpdateManyWithoutOrganizationNestedInput } from '../file/file-update-many-without-organization-nested.input';
import { PermissionUpdateManyWithoutOrganizationNestedInput } from '../permission/permission-update-many-without-organization-nested.input';
import { PermissionGroupUpdateManyWithoutOrganizationNestedInput } from '../permission-group/permission-group-update-many-without-organization-nested.input';
import { ProjectUpdateManyWithoutOrganizationNestedInput } from '../project/project-update-many-without-organization-nested.input';
import { ResourceUpdateManyWithoutOrganizationNestedInput } from '../resource/resource-update-many-without-organization-nested.input';
import { SettingsUpdateManyWithoutOrganizationNestedInput } from '../settings/settings-update-many-without-organization-nested.input';
import { TaskUpdateManyWithoutOrganizationNestedInput } from '../task/task-update-many-without-organization-nested.input';
import { TaskBoardUpdateManyWithoutOrganizationNestedInput } from '../task-board/task-board-update-many-without-organization-nested.input';
import { TaskDefinitionUpdateManyWithoutOrganizationNestedInput } from '../task-definition/task-definition-update-many-without-organization-nested.input';
import { UserUpdateManyWithoutOrganizationNestedInput } from '../user/user-update-many-without-organization-nested.input';

@InputType()
export class OrganizationUpdateWithoutTeamsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EventLogUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput;

    @Field(() => FileUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    files?: FileUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionGroupUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissionGroups?: PermissionGroupUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ProjectUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ResourceUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    resources?: ResourceUpdateManyWithoutOrganizationNestedInput;

    @Field(() => SettingsUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    settings?: SettingsUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskDefinitionUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUpdateManyWithoutOrganizationNestedInput;

    @Field(() => UserUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutOrganizationNestedInput;
}
