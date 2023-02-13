import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskDefinitionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    organizationId?: true;

    @Field(() => Boolean, {nullable:true})
    parentId?: true;

    @Field(() => Boolean, {nullable:true})
    formId?: true;
}
