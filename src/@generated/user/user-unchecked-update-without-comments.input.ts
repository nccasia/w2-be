import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { TeamUncheckedUpdateManyWithoutManagerNestedInput } from '../team/team-unchecked-update-many-without-manager-nested.input';
import { TeamUncheckedUpdateManyWithoutCreatorNestedInput } from '../team/team-unchecked-update-many-without-creator-nested.input';
import { TaskUncheckedUpdateManyWithoutCreatorNestedInput } from '../task/task-unchecked-update-many-without-creator-nested.input';
import { TaskUncheckedUpdateManyWithoutAssigneeNestedInput } from '../task/task-unchecked-update-many-without-assignee-nested.input';
import { MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput } from '../member-on-teams/member-on-teams-unchecked-update-many-without-user-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { EventLogUncheckedUpdateManyWithoutUserNestedInput } from '../event-log/event-log-unchecked-update-many-without-user-nested.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserPermissionUncheckedUpdateManyWithoutUserNestedInput } from '../user-permission/user-permission-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    avatarId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => TeamUncheckedUpdateManyWithoutManagerNestedInput, {nullable:true})
    managedteams?: TeamUncheckedUpdateManyWithoutManagerNestedInput;

    @Field(() => TeamUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdteams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;

    @Field(() => MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => EventLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    taskEvents?: EventLogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => UserPermissionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userPermissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput;
}
