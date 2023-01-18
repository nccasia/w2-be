import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityDefinitionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    synchronous?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    key?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;
}
