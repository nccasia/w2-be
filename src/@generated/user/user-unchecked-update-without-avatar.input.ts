import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { EnumProviderEnumFieldUpdateOperationsInput } from '../prisma/enum-provider-enum-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutCreatorNestedInput } from '../comment/comment-unchecked-update-many-without-creator-nested.input';
import { EventLogUncheckedUpdateManyWithoutUserNestedInput } from '../event-log/event-log-unchecked-update-many-without-user-nested.input';
import { MemberOnProjectsUncheckedUpdateManyWithoutUserNestedInput } from '../member-on-projects/member-on-projects-unchecked-update-many-without-user-nested.input';
import { MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput } from '../member-on-teams/member-on-teams-unchecked-update-many-without-user-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { ProjectUncheckedUpdateManyWithoutCreatorNestedInput } from '../project/project-unchecked-update-many-without-creator-nested.input';
import { ProjectUncheckedUpdateManyWithoutManagerNestedInput } from '../project/project-unchecked-update-many-without-manager-nested.input';
import { ProjectUncheckedUpdateManyWithoutReporterNestedInput } from '../project/project-unchecked-update-many-without-reporter-nested.input';
import { TaskUncheckedUpdateManyWithoutAssigneeNestedInput } from '../task/task-unchecked-update-many-without-assignee-nested.input';
import { TaskUncheckedUpdateManyWithoutCreatorNestedInput } from '../task/task-unchecked-update-many-without-creator-nested.input';
import { TaskUncheckedUpdateManyWithoutReporterNestedInput } from '../task/task-unchecked-update-many-without-reporter-nested.input';
import { TeamUncheckedUpdateManyWithoutCreatorNestedInput } from '../team/team-unchecked-update-many-without-creator-nested.input';
import { TeamUncheckedUpdateManyWithoutManagerNestedInput } from '../team/team-unchecked-update-many-without-manager-nested.input';
import { UserPermissionUncheckedUpdateManyWithoutUserNestedInput } from '../user-permission/user-permission-unchecked-update-many-without-user-nested.input';
import { UserSettingUncheckedUpdateManyWithoutUserNestedInput } from '../user-setting/user-setting-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutAvatarInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumProviderEnumFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumProviderEnumFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => EventLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    taskEvents?: EventLogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MemberOnProjectsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    memberOnProjects?: MemberOnProjectsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutReporterNestedInput, {nullable:true})
    repotedProjects?: ProjectUncheckedUpdateManyWithoutReporterNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutReporterNestedInput, {nullable:true})
    reportedTasks?: TaskUncheckedUpdateManyWithoutReporterNestedInput;

    @Field(() => TeamUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdteams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => TeamUncheckedUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedteams?: TeamUncheckedUpdateManyWithoutManagerNestedInput;

    @Field(() => UserPermissionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userPermissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserSettingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userSettings?: UserSettingUncheckedUpdateManyWithoutUserNestedInput;
}
