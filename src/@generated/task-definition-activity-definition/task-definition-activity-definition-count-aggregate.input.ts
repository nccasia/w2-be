import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskDefinitionActivityDefinitionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    taskDefinitionId?: true;

    @Field(() => Boolean, {nullable:true})
    activityDefinitionId?: true;

    @Field(() => Boolean, {nullable:true})
    config?: true;

    @Field(() => Boolean, {nullable:true})
    initialValue?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
