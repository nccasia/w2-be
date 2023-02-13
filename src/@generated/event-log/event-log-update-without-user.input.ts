import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationUpdateOneRequiredWithoutEventLogsNestedInput } from '../organization/organization-update-one-required-without-event-logs-nested.input';
import { TaskUpdateOneWithoutEventLogsNestedInput } from '../task/task-update-one-without-event-logs-nested.input';

@InputType()
export class EventLogUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    context?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    action?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    domain?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    intent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutEventLogsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutEventLogsNestedInput;

    @Field(() => TaskUpdateOneWithoutEventLogsNestedInput, {nullable:true})
    task?: TaskUpdateOneWithoutEventLogsNestedInput;
}
