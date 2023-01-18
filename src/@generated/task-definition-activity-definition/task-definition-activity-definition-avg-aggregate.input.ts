import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskDefinitionActivityDefinitionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    taskDefinitionId?: true;

    @Field(() => Boolean, {nullable:true})
    activityDefinitionId?: true;
}
