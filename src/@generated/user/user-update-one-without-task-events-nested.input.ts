import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTaskEventsInput } from './user-create-without-task-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTaskEventsInput } from './user-create-or-connect-without-task-events.input';
import { UserUpsertWithoutTaskEventsInput } from './user-upsert-without-task-events.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTaskEventsInput } from './user-update-without-task-events.input';

@InputType()
export class UserUpdateOneWithoutTaskEventsNestedInput {

    @Field(() => UserCreateWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutTaskEventsInput)
    create?: UserCreateWithoutTaskEventsInput;

    @Field(() => UserCreateOrConnectWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTaskEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTaskEventsInput;

    @Field(() => UserUpsertWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserUpsertWithoutTaskEventsInput)
    upsert?: UserUpsertWithoutTaskEventsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTaskEventsInput, {nullable:true})
    @Type(() => UserUpdateWithoutTaskEventsInput)
    update?: UserUpdateWithoutTaskEventsInput;
}
