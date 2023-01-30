import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FileUpdateOneWithoutAvatarUsersNestedInput } from '../file/file-update-one-without-avatar-users-nested.input';
import { OrganizationUpdateOneRequiredWithoutUsersNestedInput } from '../organization/organization-update-one-required-without-users-nested.input';
import { TeamUpdateManyWithoutManagerNestedInput } from '../team/team-update-many-without-manager-nested.input';
import { TeamUpdateManyWithoutCreatorNestedInput } from '../team/team-update-many-without-creator-nested.input';
import { TaskUpdateManyWithoutAssigneeNestedInput } from '../task/task-update-many-without-assignee-nested.input';
import { MemberOnTeamsUpdateManyWithoutUserNestedInput } from '../member-on-teams/member-on-teams-update-many-without-user-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { CommentUpdateManyWithoutCreatorNestedInput } from '../comment/comment-update-many-without-creator-nested.input';
import { EventLogUpdateManyWithoutUserNestedInput } from '../event-log/event-log-update-many-without-user-nested.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserPermissionUpdateManyWithoutUserNestedInput } from '../user-permission/user-permission-update-many-without-user-nested.input';
import { UserSettingUpdateManyWithoutUserNestedInput } from '../user-setting/user-setting-update-many-without-user-nested.input';
import { MemberOnProjectsUpdateManyWithoutUserNestedInput } from '../member-on-projects/member-on-projects-update-many-without-user-nested.input';
import { ProjectUpdateManyWithoutManagerNestedInput } from '../project/project-update-many-without-manager-nested.input';
import { ProjectUpdateManyWithoutCreatorNestedInput } from '../project/project-update-many-without-creator-nested.input';
import { TaskUpdateManyWithoutReporterNestedInput } from '../task/task-update-many-without-reporter-nested.input';
import { ProjectUpdateManyWithoutReporterNestedInput } from '../project/project-update-many-without-reporter-nested.input';

@InputType()
export class UserUpdateWithoutCreatedTasksInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutAvatarUsersNestedInput, {nullable:true})
    avatar?: FileUpdateOneWithoutAvatarUsersNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => TeamUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedteams?: TeamUpdateManyWithoutManagerNestedInput;

    @Field(() => TeamUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdteams?: TeamUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput;

    @Field(() => MemberOnTeamsUpdateManyWithoutUserNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUpdateManyWithoutUserNestedInput;

    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentUpdateManyWithoutCreatorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutCreatorNestedInput;

    @Field(() => EventLogUpdateManyWithoutUserNestedInput, {nullable:true})
    taskEvents?: EventLogUpdateManyWithoutUserNestedInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => UserPermissionUpdateManyWithoutUserNestedInput, {nullable:true})
    userPermissions?: UserPermissionUpdateManyWithoutUserNestedInput;

    @Field(() => UserSettingUpdateManyWithoutUserNestedInput, {nullable:true})
    userSettings?: UserSettingUpdateManyWithoutUserNestedInput;

    @Field(() => MemberOnProjectsUpdateManyWithoutUserNestedInput, {nullable:true})
    memberOnProjects?: MemberOnProjectsUpdateManyWithoutUserNestedInput;

    @Field(() => ProjectUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput;

    @Field(() => ProjectUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUpdateManyWithoutReporterNestedInput, {nullable:true})
    reportedTasks?: TaskUpdateManyWithoutReporterNestedInput;

    @Field(() => ProjectUpdateManyWithoutReporterNestedInput, {nullable:true})
    repotedProjects?: ProjectUpdateManyWithoutReporterNestedInput;
}
