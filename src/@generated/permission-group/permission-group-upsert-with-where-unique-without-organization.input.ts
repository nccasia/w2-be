import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionGroupUpdateWithoutOrganizationInput } from './permission-group-update-without-organization.input';
import { PermissionGroupCreateWithoutOrganizationInput } from './permission-group-create-without-organization.input';

@InputType()
export class PermissionGroupUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionGroupUpdateWithoutOrganizationInput)
    update!: PermissionGroupUpdateWithoutOrganizationInput;

    @Field(() => PermissionGroupCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionGroupCreateWithoutOrganizationInput)
    create!: PermissionGroupCreateWithoutOrganizationInput;
}
