import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutMembersNestedInput } from '../project/project-update-one-required-without-members-nested.input';

@InputType()
export class MemberOnProjectsUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput;
}
