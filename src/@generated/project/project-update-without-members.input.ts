import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCreatedProjectsNestedInput } from '../user/user-update-one-required-without-created-projects-nested.input';
import { UserUpdateOneRequiredWithoutManagedProjectsNestedInput } from '../user/user-update-one-required-without-managed-projects-nested.input';
import { OrganizationUpdateOneRequiredWithoutProjectsNestedInput } from '../organization/organization-update-one-required-without-projects-nested.input';
import { UserUpdateOneRequiredWithoutRepotedProjectsNestedInput } from '../user/user-update-one-required-without-repoted-projects-nested.input';
import { TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput } from '../task-definition/task-definition-update-one-required-without-projects-nested.input';
import { ProjectSettingsUpdateManyWithoutProjectNestedInput } from '../project-settings/project-settings-update-many-without-project-nested.input';
import { TaskUpdateManyWithoutProjectNestedInput } from '../task/task-update-many-without-project-nested.input';
import { TaskBoardUpdateManyWithoutProjectNestedInput } from '../task-board/task-board-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutMembersInput {

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

    @Field(() => UserUpdateOneRequiredWithoutCreatedProjectsNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutManagedProjectsNestedInput, {nullable:true})
    manager?: UserUpdateOneRequiredWithoutManagedProjectsNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRepotedProjectsNestedInput, {nullable:true})
    reporter?: UserUpdateOneRequiredWithoutRepotedProjectsNestedInput;

    @Field(() => TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    taskDefinition?: TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => ProjectSettingsUpdateManyWithoutProjectNestedInput, {nullable:true})
    settings?: ProjectSettingsUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskUpdateManyWithoutProjectNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutProjectNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutProjectNestedInput;
}
