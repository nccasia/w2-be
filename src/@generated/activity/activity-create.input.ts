import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkflowCreateNestedOneWithoutActivitiesInput } from '../workflow/workflow-create-nested-one-without-activities.input';
import { TaskDefinitionCreateNestedManyWithoutActivityInput } from '../task-definition/task-definition-create-nested-many-without-activity.input';
import { TriggerCreateNestedManyWithoutActivityInput } from '../trigger/trigger-create-nested-many-without-activity.input';

@InputType()
export class ActivityCreateInput {

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

    @Field(() => WorkflowCreateNestedOneWithoutActivitiesInput, {nullable:false})
    workflow!: WorkflowCreateNestedOneWithoutActivitiesInput;

    @Field(() => TaskDefinitionCreateNestedManyWithoutActivityInput, {nullable:true})
    taskDefinitions?: TaskDefinitionCreateNestedManyWithoutActivityInput;

    @Field(() => TriggerCreateNestedManyWithoutActivityInput, {nullable:true})
    triggers?: TriggerCreateNestedManyWithoutActivityInput;
}
