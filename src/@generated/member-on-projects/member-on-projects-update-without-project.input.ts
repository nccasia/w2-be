import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutMemberOnProjectsNestedInput } from '../user/user-update-one-required-without-member-on-projects-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class MemberOnProjectsUpdateWithoutProjectInput {

    @Field(() => UserUpdateOneRequiredWithoutMemberOnProjectsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMemberOnProjectsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;
}
