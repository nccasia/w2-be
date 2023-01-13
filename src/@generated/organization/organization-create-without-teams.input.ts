import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedManyWithoutOrganizationInput } from '../task/task-create-nested-many-without-organization.input';
import { UserCreateNestedManyWithoutOrganizationInput } from '../user/user-create-nested-many-without-organization.input';
import { SettingsCreateNestedManyWithoutOrganizationInput } from '../settings/settings-create-nested-many-without-organization.input';
import { FileCreateNestedManyWithoutOrganizationInput } from '../file/file-create-nested-many-without-organization.input';
import { EventLogCreateNestedManyWithoutOrganizationInput } from '../event-log/event-log-create-nested-many-without-organization.input';
import { TaskDefinitionCreateNestedManyWithoutOrganizationInput } from '../task-definition/task-definition-create-nested-many-without-organization.input';
import { WorkflowCreateNestedManyWithoutOrganizationInput } from '../workflow/workflow-create-nested-many-without-organization.input';
import { PermissionGroupCreateNestedManyWithoutOrganizationInput } from '../permission-group/permission-group-create-nested-many-without-organization.input';
import { PermissionCreateNestedManyWithoutOrganizationInput } from '../permission/permission-create-nested-many-without-organization.input';
import { ResourceCreateNestedManyWithoutOrganizationInput } from '../resource/resource-create-nested-many-without-organization.input';

@InputType()
export class OrganizationCreateWithoutTeamsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TaskCreateNestedManyWithoutOrganizationInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutOrganizationInput;

    @Field(() => UserCreateNestedManyWithoutOrganizationInput, {nullable:true})
    users?: UserCreateNestedManyWithoutOrganizationInput;

    @Field(() => SettingsCreateNestedManyWithoutOrganizationInput, {nullable:true})
    settings?: SettingsCreateNestedManyWithoutOrganizationInput;

    @Field(() => FileCreateNestedManyWithoutOrganizationInput, {nullable:true})
    files?: FileCreateNestedManyWithoutOrganizationInput;

    @Field(() => EventLogCreateNestedManyWithoutOrganizationInput, {nullable:true})
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput;

    @Field(() => TaskDefinitionCreateNestedManyWithoutOrganizationInput, {nullable:true})
    taskDefinitions?: TaskDefinitionCreateNestedManyWithoutOrganizationInput;

    @Field(() => WorkflowCreateNestedManyWithoutOrganizationInput, {nullable:true})
    workflows?: WorkflowCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionGroupCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissionGroups?: PermissionGroupCreateNestedManyWithoutOrganizationInput;

    @Field(() => PermissionCreateNestedManyWithoutOrganizationInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutOrganizationInput;

    @Field(() => ResourceCreateNestedManyWithoutOrganizationInput, {nullable:true})
    resources?: ResourceCreateNestedManyWithoutOrganizationInput;
}
