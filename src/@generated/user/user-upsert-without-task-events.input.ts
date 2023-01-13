import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTaskEventsInput } from './user-update-without-task-events.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTaskEventsInput } from './user-create-without-task-events.input';

@InputType()
export class UserUpsertWithoutTaskEventsInput {

    @Field(() => UserUpdateWithoutTaskEventsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTaskEventsInput)
    update!: UserUpdateWithoutTaskEventsInput;

    @Field(() => UserCreateWithoutTaskEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutTaskEventsInput)
    create!: UserCreateWithoutTaskEventsInput;
}
