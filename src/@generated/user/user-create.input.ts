import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutAvatarUsersInput } from '../file/file-create-nested-one-without-avatar-users.input';
import { OrganizationCreateNestedOneWithoutUsersInput } from '../organization/organization-create-nested-one-without-users.input';
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
import { UserSettingCreateNestedManyWithoutUserInput } from '../user-setting/user-setting-create-nested-many-without-user.input';
import { MemberOnProjectsCreateNestedManyWithoutUserInput } from '../member-on-projects/member-on-projects-create-nested-many-without-user.input';
import { ProjectCreateNestedManyWithoutManagerInput } from '../project/project-create-nested-many-without-manager.input';
import { ProjectCreateNestedManyWithoutCreatorInput } from '../project/project-create-nested-many-without-creator.input';
import { TaskCreateNestedManyWithoutReporterInput } from '../task/task-create-nested-many-without-reporter.input';
import { ProjectCreateNestedManyWithoutReporterInput } from '../project/project-create-nested-many-without-reporter.input';

@InputType()
export class UserCreateInput {

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

    @Field(() => OrganizationCreateNestedOneWithoutUsersInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutUsersInput;

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

    @Field(() => UserSettingCreateNestedManyWithoutUserInput, {nullable:true})
    userSettings?: UserSettingCreateNestedManyWithoutUserInput;

    @Field(() => MemberOnProjectsCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnProjects?: MemberOnProjectsCreateNestedManyWithoutUserInput;

    @Field(() => ProjectCreateNestedManyWithoutManagerInput, {nullable:true})
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput;

    @Field(() => ProjectCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskCreateNestedManyWithoutReporterInput, {nullable:true})
    reportedTasks?: TaskCreateNestedManyWithoutReporterInput;

    @Field(() => ProjectCreateNestedManyWithoutReporterInput, {nullable:true})
    repotedProjects?: ProjectCreateNestedManyWithoutReporterInput;
}
