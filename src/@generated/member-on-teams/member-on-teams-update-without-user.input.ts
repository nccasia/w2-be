import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TeamUpdateOneRequiredWithoutMemberOnTeamsNestedInput } from '../team/team-update-one-required-without-member-on-teams-nested.input';

@InputType()
export class MemberOnTeamsUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => TeamUpdateOneRequiredWithoutMemberOnTeamsNestedInput, {nullable:true})
    team?: TeamUpdateOneRequiredWithoutMemberOnTeamsNestedInput;
}
