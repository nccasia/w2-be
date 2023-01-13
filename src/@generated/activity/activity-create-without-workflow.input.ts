import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionCreateNestedManyWithoutActivityInput } from '../task-definition/task-definition-create-nested-many-without-activity.input';
import { TriggerCreateNestedManyWithoutActivityInput } from '../trigger/trigger-create-nested-many-without-activity.input';

@InputType()
export class ActivityCreateWithoutWorkflowInput {

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

    @Field(() => TaskDefinitionCreateNestedManyWithoutActivityInput, {nullable:true})
    taskDefinitions?: TaskDefinitionCreateNestedManyWithoutActivityInput;

    @Field(() => TriggerCreateNestedManyWithoutActivityInput, {nullable:true})
    triggers?: TriggerCreateNestedManyWithoutActivityInput;
}
