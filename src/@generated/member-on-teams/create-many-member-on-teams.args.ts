import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsCreateManyInput } from './member-on-teams-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemberOnTeamsArgs {

    @Field(() => [MemberOnTeamsCreateManyInput], {nullable:false})
    @Type(() => MemberOnTeamsCreateManyInput)
    data!: Array<MemberOnTeamsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
