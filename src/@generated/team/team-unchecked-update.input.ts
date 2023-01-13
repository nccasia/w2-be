import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MemberOnTeamsUncheckedUpdateManyWithoutTeamNestedInput } from '../member-on-teams/member-on-teams-unchecked-update-many-without-team-nested.input';
import { TaskUncheckedUpdateManyWithoutTeamNestedInput } from '../task/task-unchecked-update-many-without-team-nested.input';

@InputType()
export class TeamUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    creatorId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    managerId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    organizationId?: IntFieldUpdateOperationsInput;

    @Field(() => MemberOnTeamsUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsUncheckedUpdateManyWithoutTeamNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutTeamNestedInput;
}
