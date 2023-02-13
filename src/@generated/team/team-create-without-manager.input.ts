import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateNestedManyWithoutTeamInput } from '../member-on-teams/member-on-teams-create-nested-many-without-team.input';
import { TaskCreateNestedManyWithoutTeamInput } from '../task/task-create-nested-many-without-team.input';
import { UserCreateNestedOneWithoutCreatedteamsInput } from '../user/user-create-nested-one-without-createdteams.input';
import { OrganizationCreateNestedOneWithoutTeamsInput } from '../organization/organization-create-nested-one-without-teams.input';

@InputType()
export class TeamCreateWithoutManagerInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MemberOnTeamsCreateNestedManyWithoutTeamInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsCreateNestedManyWithoutTeamInput;

    @Field(() => TaskCreateNestedManyWithoutTeamInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutTeamInput;

    @Field(() => UserCreateNestedOneWithoutCreatedteamsInput, {nullable:false})
    creator!: UserCreateNestedOneWithoutCreatedteamsInput;

    @Field(() => OrganizationCreateNestedOneWithoutTeamsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutTeamsInput;
}
