import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserPermissionUncheckedCreateNestedManyWithoutPermissionInput } from '../user-permission/user-permission-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateWithoutPermissionGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => UserPermissionUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    userPermissions?: UserPermissionUncheckedCreateNestedManyWithoutPermissionInput;
}
