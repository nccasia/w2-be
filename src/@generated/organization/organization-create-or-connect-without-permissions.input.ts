import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutPermissionsInput } from './organization-create-without-permissions.input';

@InputType()
export class OrganizationCreateOrConnectWithoutPermissionsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutPermissionsInput)
    create!: OrganizationCreateWithoutPermissionsInput;
}
