import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportedTasksInput } from './user-create-without-reported-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReportedTasksInput } from './user-create-or-connect-without-reported-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReportedTasksInput {

    @Field(() => UserCreateWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutReportedTasksInput)
    create?: UserCreateWithoutReportedTasksInput;

    @Field(() => UserCreateOrConnectWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReportedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutReportedTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
