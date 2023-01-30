import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberOnProjectsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    assignedAt?: true;

    @Field(() => Boolean, {nullable:true})
    assignedBy?: true;
}
