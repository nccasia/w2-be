import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutManagedteamsInput } from '../user/user-create-nested-one-without-managedteams.input';
import { OrganizationCreateNestedOneWithoutTeamsInput } from '../organization/organization-create-nested-one-without-teams.input';
import { MemberOnTeamsCreateNestedManyWithoutTeamInput } from '../member-on-teams/member-on-teams-create-nested-many-without-team.input';
import { TaskCreateNestedManyWithoutTeamInput } from '../task/task-create-nested-many-without-team.input';

@InputType()
export class TeamCreateWithoutCreatorInput {

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

    @Field(() => UserCreateNestedOneWithoutManagedteamsInput, {nullable:false})
    manager!: UserCreateNestedOneWithoutManagedteamsInput;

    @Field(() => OrganizationCreateNestedOneWithoutTeamsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutTeamsInput;

    @Field(() => MemberOnTeamsCreateNestedManyWithoutTeamInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsCreateNestedManyWithoutTeamInput;

    @Field(() => TaskCreateNestedManyWithoutTeamInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutTeamInput;
}
