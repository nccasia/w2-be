import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TeamUncheckedCreateNestedManyWithoutManagerInput } from '../team/team-unchecked-create-nested-many-without-manager.input';
import { TeamUncheckedCreateNestedManyWithoutCreatorInput } from '../team/team-unchecked-create-nested-many-without-creator.input';
import { TaskUncheckedCreateNestedManyWithoutCreatorInput } from '../task/task-unchecked-create-nested-many-without-creator.input';
import { TaskUncheckedCreateNestedManyWithoutAssigneeInput } from '../task/task-unchecked-create-nested-many-without-assignee.input';
import { MemberOnTeamsUncheckedCreateNestedManyWithoutUserInput } from '../member-on-teams/member-on-teams-unchecked-create-nested-many-without-user.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { EventLogUncheckedCreateNestedManyWithoutUserInput } from '../event-log/event-log-unchecked-create-nested-many-without-user.input';
import { Role } from '../prisma/role.enum';
import { UserPermissionUncheckedCreateNestedManyWithoutUserInput } from '../user-permission/user-permission-unchecked-create-nested-many-without-user.input';
import { UserSettingUncheckedCreateNestedManyWithoutUserInput } from '../user-setting/user-setting-unchecked-create-nested-many-without-user.input';
import { MemberOnProjectsUncheckedCreateNestedManyWithoutUserInput } from '../member-on-projects/member-on-projects-unchecked-create-nested-many-without-user.input';
import { ProjectUncheckedCreateNestedManyWithoutManagerInput } from '../project/project-unchecked-create-nested-many-without-manager.input';
import { ProjectUncheckedCreateNestedManyWithoutCreatorInput } from '../project/project-unchecked-create-nested-many-without-creator.input';
import { TaskUncheckedCreateNestedManyWithoutReporterInput } from '../task/task-unchecked-create-nested-many-without-reporter.input';
import { ProjectUncheckedCreateNestedManyWithoutReporterInput } from '../project/project-unchecked-create-nested-many-without-reporter.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

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

    @Field(() => TeamUncheckedCreateNestedManyWithoutManagerInput, {nullable:true})
    managedteams?: TeamUncheckedCreateNestedManyWithoutManagerInput;

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

    @Field(() => EventLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    taskEvents?: EventLogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => UserPermissionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userPermissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserSettingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userSettings?: UserSettingUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MemberOnProjectsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    memberOnProjects?: MemberOnProjectsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutManagerInput, {nullable:true})
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutReporterInput, {nullable:true})
    reportedTasks?: TaskUncheckedCreateNestedManyWithoutReporterInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutReporterInput, {nullable:true})
    repotedProjects?: ProjectUncheckedCreateNestedManyWithoutReporterInput;
}
