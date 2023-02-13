import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTaskBoardTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-type-field-update-operations.input';
import { EnumTaskBoardViewTypeFieldUpdateOperationsInput } from '../prisma/enum-task-board-view-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { OrganizationUpdateOneRequiredWithoutTaskBoardsNestedInput } from '../organization/organization-update-one-required-without-task-boards-nested.input';
import { ProjectUpdateOneWithoutTaskBoardsNestedInput } from '../project/project-update-one-without-task-boards-nested.input';
import { TaskDefinitionUpdateOneRequiredWithoutTaskBoardsNestedInput } from '../task-definition/task-definition-update-one-required-without-task-boards-nested.input';
import { TaskBoardSettingsUpdateManyWithoutTaskBoardNestedInput } from '../task-board-settings/task-board-settings-update-many-without-task-board-nested.input';

@InputType()
export class TaskBoardUpdateInput {

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

    @Field(() => OrganizationUpdateOneRequiredWithoutTaskBoardsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutTaskBoardsNestedInput;

    @Field(() => ProjectUpdateOneWithoutTaskBoardsNestedInput, {nullable:true})
    project?: ProjectUpdateOneWithoutTaskBoardsNestedInput;

    @Field(() => TaskDefinitionUpdateOneRequiredWithoutTaskBoardsNestedInput, {nullable:true})
    taskDefinition?: TaskDefinitionUpdateOneRequiredWithoutTaskBoardsNestedInput;

    @Field(() => TaskBoardSettingsUpdateManyWithoutTaskBoardNestedInput, {nullable:true})
    settings?: TaskBoardSettingsUpdateManyWithoutTaskBoardNestedInput;
}
