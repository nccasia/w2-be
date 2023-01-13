import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutOrganizationNestedInput } from '../task/task-unchecked-update-many-without-organization-nested.input';
import { UserUncheckedUpdateManyWithoutOrganizationNestedInput } from '../user/user-unchecked-update-many-without-organization-nested.input';
import { TeamUncheckedUpdateManyWithoutOrganizationNestedInput } from '../team/team-unchecked-update-many-without-organization-nested.input';
import { SettingsUncheckedUpdateManyWithoutOrganizationNestedInput } from '../settings/settings-unchecked-update-many-without-organization-nested.input';
import { FileUncheckedUpdateManyWithoutOrganizationNestedInput } from '../file/file-unchecked-update-many-without-organization-nested.input';
import { EventLogUncheckedUpdateManyWithoutOrganizationNestedInput } from '../event-log/event-log-unchecked-update-many-without-organization-nested.input';
import { WorkflowUncheckedUpdateManyWithoutOrganizationNestedInput } from '../workflow/workflow-unchecked-update-many-without-organization-nested.input';
import { PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput } from '../permission-group/permission-group-unchecked-update-many-without-organization-nested.input';
import { PermissionUncheckedUpdateManyWithoutOrganizationNestedInput } from '../permission/permission-unchecked-update-many-without-organization-nested.input';
import { ResourceUncheckedUpdateManyWithoutOrganizationNestedInput } from '../resource/resource-unchecked-update-many-without-organization-nested.input';

@InputType()
export class OrganizationUncheckedUpdateWithoutTaskDefinitionsInput {

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

    @Field(() => TaskUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => TeamUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    teams?: TeamUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => SettingsUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    settings?: SettingsUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => FileUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    files?: FileUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => EventLogUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => WorkflowUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    workflows?: WorkflowUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissionGroups?: PermissionGroupUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => ResourceUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    resources?: ResourceUncheckedUpdateManyWithoutOrganizationNestedInput;
}
