import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateNestedManyWithoutOrganizationInput } from '../event-log/event-log-create-nested-many-without-organization.input';
import { FileCreateNestedManyWithoutOrganizationInput } from '../file/file-create-nested-many-without-organization.input';
import { PermissionCreateNestedManyWithoutOrganizationInput } from '../permission/permission-create-nested-many-without-organization.input';
import { PermissionGroupCreateNestedManyWithoutOrganizationInput } from '../permission-group/permission-group-create-nested-many-without-organization.input';
import { ProjectCreateNestedManyWithoutOrganizationInput } from '../project/project-create-nested-many-without-organization.input';
import { ResourceCreateNestedManyWithoutOrganizationInput } from '../resource/resource-create-nested-many-without-organization.input';
import { SettingsCreateNestedManyWithoutOrganizationInput } from '../settings/settings-create-nested-many-without-organization.input';
import { TaskBoardCreateNestedManyWithoutOrganizationInput } from '../task-board/task-board-create-nested-many-without-organization.input';
import { TeamCreateNestedManyWithoutOrganizationInput } from '../team/team-create-nested-many-without-organization.input';
import { UserCreateNestedManyWithoutOrganizationInput } from '../user/user-create-nested-many-without-organization.input';

@InputType()
export class OrganizationCreateWithoutTasksInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventLogCreateNestedManyWithoutOrganizationInput, {nullable:true})
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput;

    @Field(() => FileCreateNestedManyWithoutOrganizationInput, {nullable:true})
    files?: FileCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionGroupCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissionGroups?: PermissionGroupCreateNestedManyWithoutOrganizationInput;

    @Field(() => ProjectCreateNestedManyWithoutOrganizationInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutOrganizationInput;

    @Field(() => ResourceCreateNestedManyWithoutOrganizationInput, {nullable:true})
    resources?: ResourceCreateNestedManyWithoutOrganizationInput;

    @Field(() => SettingsCreateNestedManyWithoutOrganizationInput, {nullable:true})
    settings?: SettingsCreateNestedManyWithoutOrganizationInput;

    @Field(() => TaskBoardCreateNestedManyWithoutOrganizationInput, {nullable:true})
    taskBoards?: TaskBoardCreateNestedManyWithoutOrganizationInput;

    @Field(() => TeamCreateNestedManyWithoutOrganizationInput, {nullable:true})
    teams?: TeamCreateNestedManyWithoutOrganizationInput;

    @Field(() => UserCreateNestedManyWithoutOrganizationInput, {nullable:true})
    users?: UserCreateNestedManyWithoutOrganizationInput;
}
