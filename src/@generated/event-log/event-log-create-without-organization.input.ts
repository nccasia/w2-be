import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTaskEventsInput } from '../user/user-create-nested-one-without-task-events.input';
import { TaskCreateNestedOneWithoutEventLogsInput } from '../task/task-create-nested-one-without-event-logs.input';
import { ActionCreateNestedOneWithoutEventsInput } from '../action/action-create-nested-one-without-events.input';

@InputType()
export class EventLogCreateWithoutOrganizationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTaskEventsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutTaskEventsInput;

    @Field(() => TaskCreateNestedOneWithoutEventLogsInput, {nullable:true})
    task?: TaskCreateNestedOneWithoutEventLogsInput;

    @Field(() => ActionCreateNestedOneWithoutEventsInput, {nullable:true})
    Action?: ActionCreateNestedOneWithoutEventsInput;
}
