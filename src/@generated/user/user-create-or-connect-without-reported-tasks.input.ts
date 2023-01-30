import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReportedTasksInput } from './user-create-without-reported-tasks.input';

@InputType()
export class UserCreateOrConnectWithoutReportedTasksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReportedTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutReportedTasksInput)
    create!: UserCreateWithoutReportedTasksInput;
}
