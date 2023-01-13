import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkflowUpdateOneRequiredWithoutActivitiesNestedInput } from '../workflow/workflow-update-one-required-without-activities-nested.input';
import { TaskDefinitionUpdateManyWithoutActivityNestedInput } from '../task-definition/task-definition-update-many-without-activity-nested.input';
import { TriggerUpdateManyWithoutActivityNestedInput } from '../trigger/trigger-update-many-without-activity-nested.input';

@InputType()
export class ActivityUpdateInput {

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

    @Field(() => WorkflowUpdateOneRequiredWithoutActivitiesNestedInput, {nullable:true})
    workflow?: WorkflowUpdateOneRequiredWithoutActivitiesNestedInput;

    @Field(() => TaskDefinitionUpdateManyWithoutActivityNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUpdateManyWithoutActivityNestedInput;

    @Field(() => TriggerUpdateManyWithoutActivityNestedInput, {nullable:true})
    triggers?: TriggerUpdateManyWithoutActivityNestedInput;
}
