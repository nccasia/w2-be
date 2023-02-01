import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskCreateNestedManyWithoutFormInput } from '../task/task-create-nested-many-without-form.input';

@InputType()
export class FormCreateWithoutTaskDefinitionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    schema!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    validationConfig!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    triggerConfig!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    serializerConfig!: any;

    @Field(() => String, {nullable:false})
    displayTemplate!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    displayConfig!: any;

    @Field(() => TaskCreateNestedManyWithoutFormInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutFormInput;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
