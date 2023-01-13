import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateWithoutUserInput } from './member-on-teams-create-without-user.input';

@InputType()
export class MemberOnTeamsCreateOrConnectWithoutUserInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsCreateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateWithoutUserInput)
    create!: MemberOnTeamsCreateWithoutUserInput;
}
