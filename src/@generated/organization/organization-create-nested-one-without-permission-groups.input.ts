import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutPermissionGroupsInput } from './organization-create-without-permission-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutPermissionGroupsInput } from './organization-create-or-connect-without-permission-groups.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutPermissionGroupsInput {

    @Field(() => OrganizationCreateWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutPermissionGroupsInput)
    create?: OrganizationCreateWithoutPermissionGroupsInput;

    @Field(() => OrganizationCreateOrConnectWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutPermissionGroupsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutPermissionGroupsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
