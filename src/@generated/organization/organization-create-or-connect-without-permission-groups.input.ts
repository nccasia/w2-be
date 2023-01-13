import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutPermissionGroupsInput } from './organization-create-without-permission-groups.input';

@InputType()
export class OrganizationCreateOrConnectWithoutPermissionGroupsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutPermissionGroupsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutPermissionGroupsInput)
    create!: OrganizationCreateWithoutPermissionGroupsInput;
}
