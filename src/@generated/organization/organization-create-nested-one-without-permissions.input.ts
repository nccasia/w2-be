import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutPermissionsInput } from './organization-create-without-permissions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutPermissionsInput } from './organization-create-or-connect-without-permissions.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutPermissionsInput {

    @Field(() => OrganizationCreateWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutPermissionsInput)
    create?: OrganizationCreateWithoutPermissionsInput;

    @Field(() => OrganizationCreateOrConnectWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutPermissionsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
