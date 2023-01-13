import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutPermissionGroupsInput } from './organization-create-without-permission-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutPermissionGroupsInput } from './organization-create-or-connect-without-permission-groups.input';
import { OrganizationUpsertWithoutPermissionGroupsInput } from './organization-upsert-without-permission-groups.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutPermissionGroupsInput } from './organization-update-without-permission-groups.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutPermissionGroupsNestedInput {

    @Field(() => OrganizationCreateWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutPermissionGroupsInput)
    create?: OrganizationCreateWithoutPermissionGroupsInput;

    @Field(() => OrganizationCreateOrConnectWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutPermissionGroupsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutPermissionGroupsInput;

    @Field(() => OrganizationUpsertWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutPermissionGroupsInput)
    upsert?: OrganizationUpsertWithoutPermissionGroupsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutPermissionGroupsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutPermissionGroupsInput)
    update?: OrganizationUpdateWithoutPermissionGroupsInput;
}
