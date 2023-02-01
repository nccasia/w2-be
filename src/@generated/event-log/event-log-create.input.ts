import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTaskEventsInput } from '../user/user-create-nested-one-without-task-events.input';
import { TaskCreateNestedOneWithoutEventLogsInput } from '../task/task-create-nested-one-without-event-logs.input';
import { OrganizationCreateNestedOneWithoutEventLogsInput } from '../organization/organization-create-nested-one-without-event-logs.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class EventLogCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTaskEventsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutTaskEventsInput;

    @Field(() => TaskCreateNestedOneWithoutEventLogsInput, {nullable:true})
    task?: TaskCreateNestedOneWithoutEventLogsInput;

    @Field(() => OrganizationCreateNestedOneWithoutEventLogsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutEventLogsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    context?: any;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    intent?: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => String, {nullable:true})
    content?: string;
}
