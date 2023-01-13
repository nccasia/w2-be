import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberOnTeamsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    teamId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
