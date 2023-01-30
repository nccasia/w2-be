import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutManagedProjectsInput } from './user-create-without-managed-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutManagedProjectsInput } from './user-create-or-connect-without-managed-projects.input';
import { UserUpsertWithoutManagedProjectsInput } from './user-upsert-without-managed-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutManagedProjectsInput } from './user-update-without-managed-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutManagedProjectsNestedInput {

    @Field(() => UserCreateWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutManagedProjectsInput)
    create?: UserCreateWithoutManagedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutManagedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutManagedProjectsInput;

    @Field(() => UserUpsertWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutManagedProjectsInput)
    upsert?: UserUpsertWithoutManagedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutManagedProjectsInput)
    update?: UserUpdateWithoutManagedProjectsInput;
}
