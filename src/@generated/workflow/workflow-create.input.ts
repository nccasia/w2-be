import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationCreateNestedOneWithoutWorkflowsInput } from '../organization/organization-create-nested-one-without-workflows.input';
import { ActivityCreateNestedManyWithoutWorkflowInput } from '../activity/activity-create-nested-many-without-workflow.input';
import { TaskDefinitionCreateNestedManyWithoutWorkflowInput } from '../task-definition/task-definition-create-nested-many-without-workflow.input';

@InputType()
export class WorkflowCreateInput {

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

    @Field(() => OrganizationCreateNestedOneWithoutWorkflowsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutWorkflowsInput;

    @Field(() => ActivityCreateNestedManyWithoutWorkflowInput, {nullable:true})
    activities?: ActivityCreateNestedManyWithoutWorkflowInput;

    @Field(() => TaskDefinitionCreateNestedManyWithoutWorkflowInput, {nullable:true})
    taskDefinitions?: TaskDefinitionCreateNestedManyWithoutWorkflowInput;
}
