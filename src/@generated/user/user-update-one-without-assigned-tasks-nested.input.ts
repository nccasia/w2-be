import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignedTasksInput } from './user-create-without-assigned-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignedTasksInput } from './user-create-or-connect-without-assigned-tasks.input';
import { UserUpsertWithoutAssignedTasksInput } from './user-upsert-without-assigned-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAssignedTasksInput } from './user-update-without-assigned-tasks.input';

@InputType()
export class UserUpdateOneWithoutAssignedTasksNestedInput {

    @Field(() => UserCreateWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignedTasksInput)
    create?: UserCreateWithoutAssignedTasksInput;

    @Field(() => UserCreateOrConnectWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput;

    @Field(() => UserUpsertWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserUpsertWithoutAssignedTasksInput)
    upsert?: UserUpsertWithoutAssignedTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserUpdateWithoutAssignedTasksInput)
    update?: UserUpdateWithoutAssignedTasksInput;
}
