import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProviderEnum } from '../prisma/provider.enum';
import { CommentCreateNestedManyWithoutCreatorInput } from '../comment/comment-create-nested-many-without-creator.input';
import { EventLogCreateNestedManyWithoutUserInput } from '../event-log/event-log-create-nested-many-without-user.input';
import { MemberOnProjectsCreateNestedManyWithoutUserInput } from '../member-on-projects/member-on-projects-create-nested-many-without-user.input';
import { MemberOnTeamsCreateNestedManyWithoutUserInput } from '../member-on-teams/member-on-teams-create-nested-many-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { ProjectCreateNestedManyWithoutCreatorInput } from '../project/project-create-nested-many-without-creator.input';
import { ProjectCreateNestedManyWithoutManagerInput } from '../project/project-create-nested-many-without-manager.input';
import { ProjectCreateNestedManyWithoutReporterInput } from '../project/project-create-nested-many-without-reporter.input';
import { TaskCreateNestedManyWithoutAssigneeInput } from '../task/task-create-nested-many-without-assignee.input';
import { TaskCreateNestedManyWithoutCreatorInput } from '../task/task-create-nested-many-without-creator.input';
import { TaskCreateNestedManyWithoutReporterInput } from '../task/task-create-nested-many-without-reporter.input';
import { TeamCreateNestedManyWithoutCreatorInput } from '../team/team-create-nested-many-without-creator.input';
import { TeamCreateNestedManyWithoutManagerInput } from '../team/team-create-nested-many-without-manager.input';
import { FileCreateNestedOneWithoutAvatarUsersInput } from '../file/file-create-nested-one-without-avatar-users.input';
import { OrganizationCreateNestedOneWithoutUsersInput } from '../organization/organization-create-nested-one-without-users.input';
import { UserPermissionCreateNestedManyWithoutUserInput } from '../user-permission/user-permission-create-nested-many-without-user.input';
import { UserSettingCreateNestedManyWithoutUserInput } from '../user-setting/user-setting-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => String, {nullable:true})
    googleToken?: string;

    @Field(() => ProviderEnum, {nullable:true})
    provider?: keyof typeof ProviderEnum;

    @Field(() => String, {nullable:true})
    fullName?: string;

    @Field(() => String, {nullable:true})
    branchCode?: string;

    @Field(() => String, {nullable:true})
    jobPositionCode?: string;

    @Field(() => String, {nullable:true})
    userTypeName?: string;

    @Field(() => String, {nullable:true})
    statusName?: string;

    @Field(() => CommentCreateNestedManyWithoutCreatorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutCreatorInput;

    @Field(() => EventLogCreateNestedManyWithoutUserInput, {nullable:true})
    taskEvents?: EventLogCreateNestedManyWithoutUserInput;

    @Field(() => MemberOnProjectsCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnProjects?: MemberOnProjectsCreateNestedManyWithoutUserInput;

    @Field(() => MemberOnTeamsCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsCreateNestedManyWithoutUserInput;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => ProjectCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput;

    @Field(() => ProjectCreateNestedManyWithoutManagerInput, {nullable:true})
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput;

    @Field(() => ProjectCreateNestedManyWithoutReporterInput, {nullable:true})
    repotedProjects?: ProjectCreateNestedManyWithoutReporterInput;

    @Field(() => TaskCreateNestedManyWithoutAssigneeInput, {nullable:true})
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput;

    @Field(() => TaskCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskCreateNestedManyWithoutReporterInput, {nullable:true})
    reportedTasks?: TaskCreateNestedManyWithoutReporterInput;

    @Field(() => TeamCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdteams?: TeamCreateNestedManyWithoutCreatorInput;

    @Field(() => TeamCreateNestedManyWithoutManagerInput, {nullable:true})
    managedteams?: TeamCreateNestedManyWithoutManagerInput;

    @Field(() => FileCreateNestedOneWithoutAvatarUsersInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutAvatarUsersInput;

    @Field(() => OrganizationCreateNestedOneWithoutUsersInput, {nullable:true})
    organization?: OrganizationCreateNestedOneWithoutUsersInput;

    @Field(() => UserPermissionCreateNestedManyWithoutUserInput, {nullable:true})
    userPermissions?: UserPermissionCreateNestedManyWithoutUserInput;

    @Field(() => UserSettingCreateNestedManyWithoutUserInput, {nullable:true})
    userSettings?: UserSettingCreateNestedManyWithoutUserInput;
}
