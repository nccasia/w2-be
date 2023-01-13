import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutPermissionGroupInput } from './permission-create-without-permission-group.input';

@InputType()
export class PermissionCreateOrConnectWithoutPermissionGroupInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutPermissionGroupInput, {nullable:false})
    @Type(() => PermissionCreateWithoutPermissionGroupInput)
    create!: PermissionCreateWithoutPermissionGroupInput;
}
