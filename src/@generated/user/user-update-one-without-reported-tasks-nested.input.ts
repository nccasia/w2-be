import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportedTasksInput } from './user-create-without-reported-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReportedTasksInput } from './user-create-or-connect-without-reported-tasks.input';
import { UserUpsertWithoutReportedTasksInput } from './user-upsert-without-reported-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReportedTasksInput } from './user-update-without-reported-tasks.input';

@InputType()
export class UserUpdateOneWithoutReportedTasksNestedInput {

    @Field(() => UserCreateWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutReportedTasksInput)
    create?: UserCreateWithoutReportedTasksInput;

    @Field(() => UserCreateOrConnectWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReportedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutReportedTasksInput;

    @Field(() => UserUpsertWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserUpsertWithoutReportedTasksInput)
    upsert?: UserUpsertWithoutReportedTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReportedTasksInput, {nullable:true})
    @Type(() => UserUpdateWithoutReportedTasksInput)
    update?: UserUpdateWithoutReportedTasksInput;
}
