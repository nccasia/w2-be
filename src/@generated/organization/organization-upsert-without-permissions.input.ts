import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutPermissionsInput } from './organization-update-without-permissions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutPermissionsInput } from './organization-create-without-permissions.input';

@InputType()
export class OrganizationUpsertWithoutPermissionsInput {

    @Field(() => OrganizationUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutPermissionsInput)
    update!: OrganizationUpdateWithoutPermissionsInput;

    @Field(() => OrganizationCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutPermissionsInput)
    create!: OrganizationCreateWithoutPermissionsInput;
}
