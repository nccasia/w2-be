import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberOnTeamsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    teamId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    assignedAt?: true;

    @Field(() => Boolean, {nullable:true})
    assignedBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
