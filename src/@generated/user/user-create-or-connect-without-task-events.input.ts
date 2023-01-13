import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTaskEventsInput } from './user-create-without-task-events.input';

@InputType()
export class UserCreateOrConnectWithoutTaskEventsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTaskEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutTaskEventsInput)
    create!: UserCreateWithoutTaskEventsInput;
}
