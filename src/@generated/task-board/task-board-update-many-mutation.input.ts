import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTaskBoardTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-type-field-update-operations.input';
import { EnumTaskBoardViewTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-view-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';

@InputType()
export class TaskBoardUpdateManyMutationInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTaskBoardTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTaskBoardTypeFieldUpdateOperationsInput;

    @Field(() => EnumTaskBoardViewTypeFieldUpdateOperationsInput, {nullable:true})
    viewType?: EnumTaskBoardViewTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    viewConfig?: any;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;
}
