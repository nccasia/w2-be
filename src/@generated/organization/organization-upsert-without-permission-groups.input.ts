import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutPermissionGroupsInput } from './organization-update-without-permission-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutPermissionGroupsInput } from './organization-create-without-permission-groups.input';

@InputType()
export class OrganizationUpsertWithoutPermissionGroupsInput {

    @Field(() => OrganizationUpdateWithoutPermissionGroupsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutPermissionGroupsInput)
    update!: OrganizationUpdateWithoutPermissionGroupsInput;

    @Field(() => OrganizationCreateWithoutPermissionGroupsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutPermissionGroupsInput)
    create!: OrganizationCreateWithoutPermissionGroupsInput;
}
