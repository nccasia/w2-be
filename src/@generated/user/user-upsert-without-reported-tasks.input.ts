import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReportedTasksInput } from './user-update-without-reported-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReportedTasksInput } from './user-create-without-reported-tasks.input';

@InputType()
export class UserUpsertWithoutReportedTasksInput {

    @Field(() => UserUpdateWithoutReportedTasksInput, {nullable:false})
    @Type(() => UserUpdateWithoutReportedTasksInput)
    update!: UserUpdateWithoutReportedTasksInput;

    @Field(() => UserCreateWithoutReportedTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutReportedTasksInput)
    create!: UserCreateWithoutReportedTasksInput;
}
