import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsUpdateManyMutationInput } from './member-on-teams-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsWhereInput } from './member-on-teams-where.input';

@ArgsType()
export class UpdateManyMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateManyMutationInput)
    data!: MemberOnTeamsUpdateManyMutationInput;

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    @Type(() => MemberOnTeamsWhereInput)
    where?: MemberOnTeamsWhereInput;
}
