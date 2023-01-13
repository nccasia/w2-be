import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCreatedteamsNestedInput } from '../user/user-update-one-required-without-createdteams-nested.input';
import { UserUpdateOneRequiredWithoutManagedteamsNestedInput } from '../user/user-update-one-required-without-managedteams-nested.input';
import { MemberOnTeamsUpdateManyWithoutTeamNestedInput } from '../member-on-teams/member-on-teams-update-many-without-team-nested.input';
import { TaskUpdateManyWithoutTeamNestedInput } from '../task/task-update-many-without-team-nested.input';

@InputType()
export class TeamUpdateWithoutOrganizationInput {

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

    @Field(() => UserUpdateOneRequiredWithoutCreatedteamsNestedInput, {nullable:true})
    creator?: UserUpdateOneRequiredWithoutCreatedteamsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutManagedteamsNestedInput, {nullable:true})
    manager?: UserUpdateOneRequiredWithoutManagedteamsNestedInput;

    @Field(() => MemberOnTeamsUpdateManyWithoutTeamNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUpdateManyWithoutTeamNestedInput;

    @Field(() => TaskUpdateManyWithoutTeamNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutTeamNestedInput;
}
