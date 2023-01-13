import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTaskEventsInput } from './user-create-without-task-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTaskEventsInput } from './user-create-or-connect-without-task-events.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTaskEventsInput {

    @Field(() => UserCreateWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutTaskEventsInput)
    create?: UserCreateWithoutTaskEventsInput;

    @Field(() => UserCreateOrConnectWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTaskEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTaskEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
