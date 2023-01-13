import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumActionTypeFieldUpdateOperationsInput } from '../prisma/enum-action-type-field-update-operations.input';
import { EventLogUpdateManyWithoutActionNestedInput } from '../event-log/event-log-update-many-without-action-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ActionUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumActionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumActionTypeFieldUpdateOperationsInput;

    @Field(() => EventLogUpdateManyWithoutActionNestedInput, {nullable:true})
    events?: EventLogUpdateManyWithoutActionNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    intent?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    domain?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;
}
