import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateNestedOneWithoutMemberOnTeamsInput } from '../team/team-create-nested-one-without-member-on-teams.input';
import { UserCreateNestedOneWithoutMemberOnTeamsInput } from '../user/user-create-nested-one-without-member-on-teams.input';

@InputType()
export class MemberOnTeamsCreateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => TeamCreateNestedOneWithoutMemberOnTeamsInput, {nullable:false})
    team!: TeamCreateNestedOneWithoutMemberOnTeamsInput;

    @Field(() => UserCreateNestedOneWithoutMemberOnTeamsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMemberOnTeamsInput;
}
