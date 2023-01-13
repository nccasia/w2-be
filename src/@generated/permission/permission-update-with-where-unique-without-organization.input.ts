import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutOrganizationInput } from './permission-update-without-organization.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutOrganizationInput)
    data!: PermissionUpdateWithoutOrganizationInput;
}
