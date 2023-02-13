import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileUncheckedCreateNestedManyWithoutOrganizationInput } from '../file/file-unchecked-create-nested-many-without-organization.input';
import { PermissionUncheckedCreateNestedManyWithoutOrganizationInput } from '../permission/permission-unchecked-create-nested-many-without-organization.input';
import { PermissionGroupUncheckedCreateNestedManyWithoutOrganizationInput } from '../permission-group/permission-group-unchecked-create-nested-many-without-organization.input';
import { ProjectUncheckedCreateNestedManyWithoutOrganizationInput } from '../project/project-unchecked-create-nested-many-without-organization.input';
import { ResourceUncheckedCreateNestedManyWithoutOrganizationInput } from '../resource/resource-unchecked-create-nested-many-without-organization.input';
import { SettingsUncheckedCreateNestedManyWithoutOrganizationInput } from '../settings/settings-unchecked-create-nested-many-without-organization.input';
import { TaskUncheckedCreateNestedManyWithoutOrganizationInput } from '../task/task-unchecked-create-nested-many-without-organization.input';
import { TaskBoardUncheckedCreateNestedManyWithoutOrganizationInput } from '../task-board/task-board-unchecked-create-nested-many-without-organization.input';
import { TaskDefinitionUncheckedCreateNestedManyWithoutOrganizationInput } from '../task-definition/task-definition-unchecked-create-nested-many-without-organization.input';
import { TeamUncheckedCreateNestedManyWithoutOrganizationInput } from '../team/team-unchecked-create-nested-many-without-organization.input';
import { UserUncheckedCreateNestedManyWithoutOrganizationInput } from '../user/user-unchecked-create-nested-many-without-organization.input';

@InputType()
export class OrganizationUncheckedCreateWithoutEventLogsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    files?: FileUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionGroupUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissionGroups?: PermissionGroupUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => ResourceUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    resources?: ResourceUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => SettingsUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    settings?: SettingsUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => TaskBoardUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => TaskDefinitionUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => TeamUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    teams?: TeamUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput;
}
