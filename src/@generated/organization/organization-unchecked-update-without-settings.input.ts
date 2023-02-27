import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventLogUncheckedUpdateManyWithoutOrganizationNestedInput } from '../event-log/event-log-unchecked-update-many-without-organization-nested.input';
import { FileUncheckedUpdateManyWithoutOrganizationNestedInput } from '../file/file-unchecked-update-many-without-organization-nested.input';
import { PermissionUncheckedUpdateManyWithoutOrganizationNestedInput } from '../permission/permission-unchecked-update-many-without-organization-nested.input';
import { PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput } from '../permission-group/permission-group-unchecked-update-many-without-organization-nested.input';
import { ProjectUncheckedUpdateManyWithoutOrganizationNestedInput } from '../project/project-unchecked-update-many-without-organization-nested.input';
import { ResourceUncheckedUpdateManyWithoutOrganizationNestedInput } from '../resource/resource-unchecked-update-many-without-organization-nested.input';
import { TaskUncheckedUpdateManyWithoutOrganizationNestedInput } from '../task/task-unchecked-update-many-without-organization-nested.input';
import { TaskBoardUncheckedUpdateManyWithoutOrganizationNestedInput } from '../task-board/task-board-unchecked-update-many-without-organization-nested.input';
import { TeamUncheckedUpdateManyWithoutOrganizationNestedInput } from '../team/team-unchecked-update-many-without-organization-nested.input';
import { UserUncheckedUpdateManyWithoutOrganizationNestedInput } from '../user/user-unchecked-update-many-without-organization-nested.input';

@InputType()
export class OrganizationUncheckedUpdateWithoutSettingsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EventLogUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => FileUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    files?: FileUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissionGroups?: PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ResourceUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    resources?: ResourceUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TaskBoardUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TeamUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    teams?: TeamUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput;
}
