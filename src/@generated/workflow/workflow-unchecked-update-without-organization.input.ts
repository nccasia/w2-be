import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ActivityUncheckedUpdateManyWithoutWorkflowNestedInput } from '../activity/activity-unchecked-update-many-without-workflow-nested.input';
import { TaskDefinitionUncheckedUpdateManyWithoutWorkflowNestedInput } from '../task-definition/task-definition-unchecked-update-many-without-workflow-nested.input';

@InputType()
export class WorkflowUncheckedUpdateWithoutOrganizationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => ActivityUncheckedUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    activities?: ActivityUncheckedUpdateManyWithoutWorkflowNestedInput;

    @Field(() => TaskDefinitionUncheckedUpdateManyWithoutWorkflowNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedUpdateManyWithoutWorkflowNestedInput;
}
