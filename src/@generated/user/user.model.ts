import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProviderEnum } from '../prisma/provider.enum';
import { Comment } from '../comment/comment.model';
import { EventLog } from '../event-log/event-log.model';
import { MemberOnProjects } from '../member-on-projects/member-on-projects.model';
import { MemberOnTeams } from '../member-on-teams/member-on-teams.model';
import { Post } from '../post/post.model';
import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { Team } from '../team/team.model';
import { File } from '../file/file.model';
import { Organization } from '../organization/organization.model';
import { UserPermission } from '../user-permission/user-permission.model';
import { UserSetting } from '../user-setting/user-setting.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:true})
    avatarId!: number | null;

    @Field(() => String, {nullable:true})
    googleId!: string | null;

    @Field(() => String, {nullable:true})
    googleToken!: string | null;

    @Field(() => ProviderEnum, {nullable:false,defaultValue:'local'})
    provider!: keyof typeof ProviderEnum;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [EventLog], {nullable:true})
    taskEvents?: Array<EventLog>;

    @Field(() => [MemberOnProjects], {nullable:true})
    memberOnProjects?: Array<MemberOnProjects>;

    @Field(() => [MemberOnTeams], {nullable:true})
    memberOnTeams?: Array<MemberOnTeams>;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Project], {nullable:true})
    createdProjects?: Array<Project>;

    @Field(() => [Project], {nullable:true})
    managedProjects?: Array<Project>;

    @Field(() => [Project], {nullable:true})
    repotedProjects?: Array<Project>;

    @Field(() => [Task], {nullable:true})
    assignedTasks?: Array<Task>;

    @Field(() => [Task], {nullable:true})
    createdTasks?: Array<Task>;

    @Field(() => [Task], {nullable:true})
    reportedTasks?: Array<Task>;

    @Field(() => [Team], {nullable:true})
    createdteams?: Array<Team>;

    @Field(() => [Team], {nullable:true})
    managedteams?: Array<Team>;

    @Field(() => File, {nullable:true})
    avatar?: File | null;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => [UserPermission], {nullable:true})
    userPermissions?: Array<UserPermission>;

    @Field(() => [UserSetting], {nullable:true})
    userSettings?: Array<UserSetting>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
