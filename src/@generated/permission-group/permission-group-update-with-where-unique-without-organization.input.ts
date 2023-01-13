import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionGroupUpdateWithoutOrganizationInput } from './permission-group-update-without-organization.input';

@InputType()
export class PermissionGroupUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionGroupUpdateWithoutOrganizationInput)
    data!: PermissionGroupUpdateWithoutOrganizationInput;
}
