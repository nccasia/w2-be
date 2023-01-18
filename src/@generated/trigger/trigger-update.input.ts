import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTriggerTypeFieldUpdateOperationsInput } from '../prisma/enum-trigger-type-field-update-operations.input';
import { EnumTriggerStatusFieldUpdateOperationsInput } from '../prisma/enum-trigger-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TaskUpdateOneWithoutTriggerNestedInput } from '../task/task-update-one-without-trigger-nested.input';

@InputType()
export class TriggerUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumTriggerTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTriggerTypeFieldUpdateOperationsInput;

    @Field(() => EnumTriggerStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTriggerStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneWithoutTriggerNestedInput, {nullable:true})
    task?: TaskUpdateOneWithoutTriggerNestedInput;
}
