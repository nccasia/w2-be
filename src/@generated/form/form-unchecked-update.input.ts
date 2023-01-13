import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionUncheckedUpdateManyWithoutFormNestedInput } from '../task-definition/task-definition-unchecked-update-many-without-form-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class FormUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    schema?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    validationConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    serializerConfig?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    displayTemplate?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    displayConfig?: any;

    @Field(() => TaskDefinitionUncheckedUpdateManyWithoutFormNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUncheckedUpdateManyWithoutFormNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
