import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FileUpdateOneWithoutAvatarUsersNestedInput } from '../file/file-update-one-without-avatar-users-nested.input';
import { TeamUpdateManyWithoutManagerNestedInput } from '../team/team-update-many-without-manager-nested.input';
import { TeamUpdateManyWithoutCreatorNestedInput } from '../team/team-update-many-without-creator-nested.input';
import { TaskUpdateManyWithoutCreatorNestedInput } from '../task/task-update-many-without-creator-nested.input';
import { TaskUpdateManyWithoutAssigneeNestedInput } from '../task/task-update-many-without-assignee-nested.input';
import { MemberOnTeamsUpdateManyWithoutUserNestedInput } from '../member-on-teams/member-on-teams-update-many-without-user-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { CommentUpdateManyWithoutCreatorNestedInput } from '../comment/comment-update-many-without-creator-nested.input';
import { EventLogUpdateManyWithoutUserNestedInput } from '../event-log/event-log-update-many-without-user-nested.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserPermissionUpdateManyWithoutUserNestedInput } from '../user-permission/user-permission-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutOrganizationInput {

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

    @Field(() => TeamUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedteams?: TeamUpdateManyWithoutManagerNestedInput;

    @Field(() => TeamUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdteams?: TeamUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput;

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
}
