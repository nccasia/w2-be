import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateNestedOneWithoutMemberOnTeamsInput } from '../team/team-create-nested-one-without-member-on-teams.input';

@InputType()
export class MemberOnTeamsCreateWithoutUserInput {

    @Field(() => TeamCreateNestedOneWithoutMemberOnTeamsInput, {nullable:false})
    team!: TeamCreateNestedOneWithoutMemberOnTeamsInput;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
