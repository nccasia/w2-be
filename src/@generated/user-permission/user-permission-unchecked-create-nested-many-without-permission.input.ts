import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateWithoutPermissionInput } from './user-permission-create-without-permission.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateOrConnectWithoutPermissionInput } from './user-permission-create-or-connect-without-permission.input';
import { UserPermissionCreateManyPermissionInputEnvelope } from './user-permission-create-many-permission-input-envelope.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';

@InputType()
export class UserPermissionUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [UserPermissionCreateWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionCreateWithoutPermissionInput)
    create?: Array<UserPermissionCreateWithoutPermissionInput>;

    @Field(() => [UserPermissionCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<UserPermissionCreateOrConnectWithoutPermissionInput>;

    @Field(() => UserPermissionCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => UserPermissionCreateManyPermissionInputEnvelope)
    createMany?: UserPermissionCreateManyPermissionInputEnvelope;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    connect?: Array<UserPermissionWhereUniqueInput>;
}
