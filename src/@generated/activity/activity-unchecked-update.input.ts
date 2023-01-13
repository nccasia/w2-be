import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionUncheckedUpdateManyWithoutActivityNestedInput } from '../task-definition/task-definition-unchecked-update-many-without-activity-nested.input';
import { TriggerUncheckedUpdateManyWithoutActivityNestedInput } from '../trigger/trigger-unchecked-update-many-without-activity-nested.input';

@InputType()
export class ActivityUncheckedUpdateInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    workflowId?: IntFieldUpdateOperationsInput;

    @Field(() => TaskDefinitionUncheckedUpdateManyWithoutActivityNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedUpdateManyWithoutActivityNestedInput;

    @Field(() => TriggerUncheckedUpdateManyWithoutActivityNestedInput, {nullable:true})
    triggers?: TriggerUncheckedUpdateManyWithoutActivityNestedInput;
}
