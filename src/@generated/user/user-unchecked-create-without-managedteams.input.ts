import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TeamUncheckedCreateNestedManyWithoutCreatorInput } from '../team/team-unchecked-create-nested-many-without-creator.input';
import { TaskUncheckedCreateNestedManyWithoutCreatorInput } from '../task/task-unchecked-create-nested-many-without-creator.input';
import { TaskUncheckedCreateNestedManyWithoutAssigneeInput } from '../task/task-unchecked-create-nested-many-without-assignee.input';
import { MemberOnTeamsUncheckedCreateNestedManyWithoutUserInput } from '../member-on-teams/member-on-teams-unchecked-create-nested-many-without-user.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutCreatorInput } from '../comment/comment-unchecked-create-nested-many-without-creator.input';
import { EventLogUncheckedCreateNestedManyWithoutUserInput } from '../event-log/event-log-unchecked-create-nested-many-without-user.input';
import { Role } from '../prisma/role.enum';
import { UserPermissionUncheckedCreateNestedManyWithoutUserInput } from '../user-permission/user-permission-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutManagedteamsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Int, {nullable:true})
    avatarId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => TeamUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdteams?: TeamUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;

    @Field(() => MemberOnTeamsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => EventLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    taskEvents?: EventLogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => UserPermissionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userPermissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput;
}
