import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput } from '../user/user-update-one-required-without-member-on-teams-nested.input';

@InputType()
export class MemberOnTeamsUpdateWithoutTeamInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput;
}
