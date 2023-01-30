import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutProjectNestedInput } from '../task/task-unchecked-update-many-without-project-nested.input';
import { MemberOnProjectsUncheckedUpdateManyWithoutProjectNestedInput } from '../member-on-projects/member-on-projects-unchecked-update-many-without-project-nested.input';
import { TaskBoardUncheckedUpdateManyWithoutProjectNestedInput } from '../task-board/task-board-unchecked-update-many-without-project-nested.input';
import { ProjectSettingsUncheckedUpdateManyWithoutProjectNestedInput } from '../project-settings/project-settings-unchecked-update-many-without-project-nested.input';

@InputType()
export class ProjectUncheckedUpdateInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    taskDefinitionId?: IntFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    creatorId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    managerId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reporterId?: IntFieldUpdateOperationsInput;

    @Field(() => MemberOnProjectsUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    members?: MemberOnProjectsUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskBoardUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    taskBoards?: TaskBoardUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectSettingsUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    settings?: ProjectSettingsUncheckedUpdateManyWithoutProjectNestedInput;
}
