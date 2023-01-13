import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateWithoutOrganizationInput } from './permission-group-create-without-organization.input';

@InputType()
export class PermissionGroupCreateOrConnectWithoutOrganizationInput {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionGroupCreateWithoutOrganizationInput)
    create!: PermissionGroupCreateWithoutOrganizationInput;
}
