import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMemberOnTeamsInput } from '../user/user-create-nested-one-without-member-on-teams.input';

@InputType()
export class MemberOnTeamsCreateWithoutTeamInput {

    @Field(() => UserCreateNestedOneWithoutMemberOnTeamsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMemberOnTeamsInput;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
