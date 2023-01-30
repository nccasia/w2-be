import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTaskBoardTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-type-field-update-operations.input';
import { EnumTaskBoardViewTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-view-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { TaskBoardSettingsUncheckedUpdateManyWithoutTaskBoardNestedInput } from '../task-board-settings/task-board-settings-unchecked-update-many-without-task-board-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class TaskBoardUncheckedUpdateInput {

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

    @Field(() => TaskBoardSettingsUncheckedUpdateManyWithoutTaskBoardNestedInput, {nullable:true})
    settings?: TaskBoardSettingsUncheckedUpdateManyWithoutTaskBoardNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    projectId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    taskDefinitionId?: IntFieldUpdateOperationsInput;
}
