import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { OrganizationUpdateOneRequiredWithoutProjectsNestedInput } from '../organization/organization-update-one-required-without-projects-nested.input';
import { TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput } from '../task-definition/task-definition-update-one-required-without-projects-nested.input';
import { TaskUpdateManyWithoutProjectNestedInput } from '../task/task-update-many-without-project-nested.input';
import { UserUpdateOneRequiredWithoutCreatedProjectsNestedInput } from '../user/user-update-one-required-without-created-projects-nested.input';
import { UserUpdateOneRequiredWithoutRepotedProjectsNestedInput } from '../user/user-update-one-required-without-repoted-projects-nested.input';
import { MemberOnProjectsUpdateManyWithoutProjectNestedInput } from '../member-on-projects/member-on-projects-update-many-without-project-nested.input';
import { TaskBoardUpdateManyWithoutProjectNestedInput } from '../task-board/task-board-update-many-without-project-nested.input';
import { ProjectSettingsUpdateManyWithoutProjectNestedInput } from '../project-settings/project-settings-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutManagerInput {

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

    @Field(() => OrganizationUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    taskDefinition?: TaskDefinitionUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => TaskUpdateManyWithoutProjectNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutProjectNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCreatedProjectsNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRepotedProjectsNestedInput, {nullable:true})
    reporter?: UserUpdateOneRequiredWithoutRepotedProjectsNestedInput;

    @Field(() => MemberOnProjectsUpdateManyWithoutProjectNestedInput, {nullable:true})
    members?: MemberOnProjectsUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskBoardUpdateManyWithoutProjectNestedInput, {nullable:true})
    taskBoards?: TaskBoardUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectSettingsUpdateManyWithoutProjectNestedInput, {nullable:true})
    settings?: ProjectSettingsUpdateManyWithoutProjectNestedInput;
}
