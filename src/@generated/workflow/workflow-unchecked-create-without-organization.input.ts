import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ActivityUncheckedCreateNestedManyWithoutWorkflowInput } from '../activity/activity-unchecked-create-nested-many-without-workflow.input';
import { TaskDefinitionUncheckedCreateNestedManyWithoutWorkflowInput } from '../task-definition/task-definition-unchecked-create-nested-many-without-workflow.input';

@InputType()
export class WorkflowUncheckedCreateWithoutOrganizationInput {

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

    @Field(() => ActivityUncheckedCreateNestedManyWithoutWorkflowInput, {nullable:true})
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkflowInput;

    @Field(() => TaskDefinitionUncheckedCreateNestedManyWithoutWorkflowInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedCreateNestedManyWithoutWorkflowInput;
}
