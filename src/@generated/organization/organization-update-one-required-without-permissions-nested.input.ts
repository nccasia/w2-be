import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutPermissionsInput } from './organization-create-without-permissions.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutPermissionsInput } from './organization-create-or-connect-without-permissions.input';
import { OrganizationUpsertWithoutPermissionsInput } from './organization-upsert-without-permissions.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutPermissionsInput } from './organization-update-without-permissions.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutPermissionsNestedInput {

    @Field(() => OrganizationCreateWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutPermissionsInput)
    create?: OrganizationCreateWithoutPermissionsInput;

    @Field(() => OrganizationCreateOrConnectWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutPermissionsInput;

    @Field(() => OrganizationUpsertWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutPermissionsInput)
    upsert?: OrganizationUpsertWithoutPermissionsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutPermissionsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutPermissionsInput)
    update?: OrganizationUpdateWithoutPermissionsInput;
}
