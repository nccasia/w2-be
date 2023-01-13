import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutOrganizationInput } from './permission-create-without-organization.input';

@InputType()
export class PermissionCreateOrConnectWithoutOrganizationInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionCreateWithoutOrganizationInput)
    create!: PermissionCreateWithoutOrganizationInput;
}
