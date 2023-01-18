import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FormDefinetionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    schema?: true;

    @Field(() => Boolean, {nullable:true})
    config?: true;

    @Field(() => Boolean, {nullable:true})
    validationConfig?: true;

    @Field(() => Boolean, {nullable:true})
    triggerConfig?: true;

    @Field(() => Boolean, {nullable:true})
    serializerConfig?: true;

    @Field(() => Boolean, {nullable:true})
    displayTemplate?: true;

    @Field(() => Boolean, {nullable:true})
    displayConfig?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
