import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberOnTeams } from '../member-on-teams/member-on-teams.model';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';
import { Organization } from '../organization/organization.model';
import { TeamCount } from './team-count.output';

@ObjectType()
export class Team {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => [MemberOnTeams], {nullable:true})
    memberOnTeams?: Array<MemberOnTeams>;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => User, {nullable:false})
    creator?: User;

    @Field(() => User, {nullable:false})
    manager?: User;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => TeamCount, {nullable:false})
    _count?: TeamCount;
}
