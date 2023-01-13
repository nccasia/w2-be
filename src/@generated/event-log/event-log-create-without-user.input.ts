import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutEventLogsInput } from '../task/task-create-nested-one-without-event-logs.input';
import { ActionCreateNestedOneWithoutEventsInput } from '../action/action-create-nested-one-without-events.input';
import { OrganizationCreateNestedOneWithoutEventLogsInput } from '../organization/organization-create-nested-one-without-event-logs.input';

@InputType()
export class EventLogCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => TaskCreateNestedOneWithoutEventLogsInput, {nullable:true})
    task?: TaskCreateNestedOneWithoutEventLogsInput;

    @Field(() => ActionCreateNestedOneWithoutEventsInput, {nullable:true})
    Action?: ActionCreateNestedOneWithoutEventsInput;

    @Field(() => OrganizationCreateNestedOneWithoutEventLogsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutEventLogsInput;
}
