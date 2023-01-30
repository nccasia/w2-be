import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutManagedProjectsInput } from './user-create-without-managed-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutManagedProjectsInput } from './user-create-or-connect-without-managed-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutManagedProjectsInput {

    @Field(() => UserCreateWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutManagedProjectsInput)
    create?: UserCreateWithoutManagedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutManagedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutManagedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutManagedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
