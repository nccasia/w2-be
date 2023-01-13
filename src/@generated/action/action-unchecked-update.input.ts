import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumActionTypeFieldUpdateOperationsInput } from '../prisma/enum-action-type-field-update-operations.input';
import { EventLogUncheckedUpdateManyWithoutActionNestedInput } from '../event-log/event-log-unchecked-update-many-without-action-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ActionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumActionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumActionTypeFieldUpdateOperationsInput;

    @Field(() => EventLogUncheckedUpdateManyWithoutActionNestedInput, {nullable:true})
    events?: EventLogUncheckedUpdateManyWithoutActionNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    intent?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    domain?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;
}
