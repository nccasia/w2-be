import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput } from '../user/user-update-one-required-without-member-on-teams-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class MemberOnTeamsUpdateWithoutTeamInput {

    @Field(() => UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;
}
