import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutAvatarUsersInput } from '../file/file-create-nested-one-without-avatar-users.input';
import { TeamCreateNestedManyWithoutManagerInput } from '../team/team-create-nested-many-without-manager.input';
import { TeamCreateNestedManyWithoutCreatorInput } from '../team/team-create-nested-many-without-creator.input';
import { TaskCreateNestedManyWithoutCreatorInput } from '../task/task-create-nested-many-without-creator.input';
import { TaskCreateNestedManyWithoutAssigneeInput } from '../task/task-create-nested-many-without-assignee.input';
import { MemberOnTeamsCreateNestedManyWithoutUserInput } from '../member-on-teams/member-on-teams-create-nested-many-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutCreatorInput } from '../comment/comment-create-nested-many-without-creator.input';
import { EventLogCreateNestedManyWithoutUserInput } from '../event-log/event-log-create-nested-many-without-user.input';
import { Role } from '../prisma/role.enum';
import { UserPermissionCreateNestedManyWithoutUserInput } from '../user-permission/user-permission-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutOrganizationInput {

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

    @Field(() => FileCreateNestedOneWithoutAvatarUsersInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutAvatarUsersInput;

    @Field(() => TeamCreateNestedManyWithoutManagerInput, {nullable:true})
    managedteams?: TeamCreateNestedManyWithoutManagerInput;

    @Field(() => TeamCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdteams?: TeamCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskCreateNestedManyWithoutAssigneeInput, {nullable:true})
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput;

    @Field(() => MemberOnTeamsCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsCreateNestedManyWithoutUserInput;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentCreateNestedManyWithoutCreatorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutCreatorInput;

    @Field(() => EventLogCreateNestedManyWithoutUserInput, {nullable:true})
    taskEvents?: EventLogCreateNestedManyWithoutUserInput;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => UserPermissionCreateNestedManyWithoutUserInput, {nullable:true})
    userPermissions?: UserPermissionCreateNestedManyWithoutUserInput;
}
