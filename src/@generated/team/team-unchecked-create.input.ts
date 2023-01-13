import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberOnTeamsUncheckedCreateNestedManyWithoutTeamInput } from '../member-on-teams/member-on-teams-unchecked-create-nested-many-without-team.input';
import { TaskUncheckedCreateNestedManyWithoutTeamInput } from '../task/task-unchecked-create-nested-many-without-team.input';

@InputType()
export class TeamUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => MemberOnTeamsUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUncheckedCreateNestedManyWithoutTeamInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutTeamInput;
}
