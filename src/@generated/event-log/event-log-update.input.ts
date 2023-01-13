import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutTaskEventsNestedInput } from '../user/user-update-one-without-task-events-nested.input';
import { TaskUpdateOneWithoutEventLogsNestedInput } from '../task/task-update-one-without-event-logs-nested.input';
import { ActionUpdateOneWithoutEventsNestedInput } from '../action/action-update-one-without-events-nested.input';
import { OrganizationUpdateOneRequiredWithoutEventLogsNestedInput } from '../organization/organization-update-one-required-without-event-logs-nested.input';

@InputType()
export class EventLogUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutTaskEventsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutTaskEventsNestedInput;

    @Field(() => TaskUpdateOneWithoutEventLogsNestedInput, {nullable:true})
    task?: TaskUpdateOneWithoutEventLogsNestedInput;

    @Field(() => ActionUpdateOneWithoutEventsNestedInput, {nullable:true})
    Action?: ActionUpdateOneWithoutEventsNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutEventLogsNestedInput, {nullable:true})
    organization?: OrganizationUpdateOneRequiredWithoutEventLogsNestedInput;
}
