import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskUpdateManyWithoutOrganizationNestedInput } from '../task/task-update-many-without-organization-nested.input';
import { UserUpdateManyWithoutOrganizationNestedInput } from '../user/user-update-many-without-organization-nested.input';
import { TeamUpdateManyWithoutOrganizationNestedInput } from '../team/team-update-many-without-organization-nested.input';
import { SettingsUpdateManyWithoutOrganizationNestedInput } from '../settings/settings-update-many-without-organization-nested.input';
import { FileUpdateManyWithoutOrganizationNestedInput } from '../file/file-update-many-without-organization-nested.input';
import { EventLogUpdateManyWithoutOrganizationNestedInput } from '../event-log/event-log-update-many-without-organization-nested.input';
import { TaskDefinitionUpdateManyWithoutOrganizationNestedInput } from '../task-definition/task-definition-update-many-without-organization-nested.input';
import { PermissionGroupUpdateManyWithoutOrganizationNestedInput } from '../permission-group/permission-group-update-many-without-organization-nested.input';
import { ResourceUpdateManyWithoutOrganizationNestedInput } from '../resource/resource-update-many-without-organization-nested.input';
import { ProjectUpdateManyWithoutOrganizationNestedInput } from '../project/project-update-many-without-organization-nested.input';
import { TaskBoardUpdateManyWithoutOrganizationNestedInput } from '../task-board/task-board-update-many-without-organization-nested.input';

@InputType()
export class OrganizationUpdateWithoutPermissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TaskUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;

    @Field(() => UserUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TeamUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    teams?: TeamUpdateManyWithoutOrganizationNestedInput;

    @Field(() => SettingsUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    settings?: SettingsUpdateManyWithoutOrganizationNestedInput;

    @Field(() => FileUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    files?: FileUpdateManyWithoutOrganizationNestedInput;

    @Field(() => EventLogUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskDefinitionUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionGroupUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissionGroups?: PermissionGroupUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ResourceUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    resources?: ResourceUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ProjectUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutOrganizationNestedInput;
}
