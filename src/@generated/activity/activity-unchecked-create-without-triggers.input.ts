import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionUncheckedCreateNestedManyWithoutActivityInput } from '../task-definition/task-definition-unchecked-create-nested-many-without-activity.input';

@InputType()
export class ActivityUncheckedCreateWithoutTriggersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => TaskDefinitionUncheckedCreateNestedManyWithoutActivityInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedCreateNestedManyWithoutActivityInput;
}
