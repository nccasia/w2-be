import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsScalarWhereInput } from './member-on-teams-scalar-where.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsUpdateManyMutationInput } from './member-on-teams-update-many-mutation.input';

@InputType()
export class MemberOnTeamsUpdateManyWithWhereWithoutTeamInput {

    @Field(() => MemberOnTeamsScalarWhereInput, {nullable:false})
    @Type(() => MemberOnTeamsScalarWhereInput)
    where!: MemberOnTeamsScalarWhereInput;

    @Field(() => MemberOnTeamsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateManyMutationInput)
    data!: MemberOnTeamsUpdateManyMutationInput;
}
