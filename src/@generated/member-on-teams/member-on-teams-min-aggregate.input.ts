import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberOnTeamsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    teamId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    assignedAt?: true;

    @Field(() => Boolean, {nullable:true})
    assignedBy?: true;
}
