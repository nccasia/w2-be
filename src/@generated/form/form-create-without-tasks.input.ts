import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionCreateNestedManyWithoutFormInput } from '../task-definition/task-definition-create-nested-many-without-form.input';

@InputType()
export class FormCreateWithoutTasksInput {

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

    @Field(() => TaskDefinitionCreateNestedManyWithoutFormInput, {nullable:true})
    taskDefinitions?: TaskDefinitionCreateNestedManyWithoutFormInput;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
