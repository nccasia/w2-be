import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutPermissionGroupInput } from '../permission/permission-unchecked-create-nested-many-without-permission-group.input';

@InputType()
export class PermissionGroupUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutPermissionGroupInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutPermissionGroupInput;
}
