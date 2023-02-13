import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationCreateNestedOneWithoutEventLogsInput } from '../organization/organization-create-nested-one-without-event-logs.input';
import { UserCreateNestedOneWithoutTaskEventsInput } from '../user/user-create-nested-one-without-task-events.input';

@InputType()
export class EventLogCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    context?: any;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => String, {nullable:true})
    intent?: string;

    @Field(() => OrganizationCreateNestedOneWithoutEventLogsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutEventLogsInput;

    @Field(() => UserCreateNestedOneWithoutTaskEventsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutTaskEventsInput;
}
