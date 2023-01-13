import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput } from '../organization/organization-update-one-required-without-workflows-nested.input';
import { TaskDefinitionUpdateManyWithoutWorkflowNestedInput } from '../task-definition/task-definition-update-many-without-workflow-nested.input';

@InputType()
export class WorkflowUpdateWithoutActivitiesInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput;

    @Field(() => TaskDefinitionUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUpdateManyWithoutWorkflowNestedInput;
}
