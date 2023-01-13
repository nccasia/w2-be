import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateManyUserInput } from './member-on-teams-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberOnTeamsCreateManyUserInputEnvelope {

    @Field(() => [MemberOnTeamsCreateManyUserInput], {nullable:false})
    @Type(() => MemberOnTeamsCreateManyUserInput)
    data!: Array<MemberOnTeamsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
