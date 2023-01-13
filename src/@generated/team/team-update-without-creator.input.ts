import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutManagedteamsNestedInput } from '../user/user-update-one-required-without-managedteams-nested.input';
import { OrganizationUpdateOneRequiredWithoutTeamsNestedInput } from '../organization/organization-update-one-required-without-teams-nested.input';
import { MemberOnTeamsUpdateManyWithoutTeamNestedInput } from '../member-on-teams/member-on-teams-update-many-without-team-nested.input';
import { TaskUpdateManyWithoutTeamNestedInput } from '../task/task-update-many-without-team-nested.input';

@InputType()
export class TeamUpdateWithoutCreatorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutManagedteamsNestedInput, {nullable:true})
    manager?: UserUpdateOneRequiredWithoutManagedteamsNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutTeamsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutTeamsNestedInput;

    @Field(() => MemberOnTeamsUpdateManyWithoutTeamNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUpdateManyWithoutTeamNestedInput;

    @Field(() => TaskUpdateManyWithoutTeamNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutTeamNestedInput;
}
