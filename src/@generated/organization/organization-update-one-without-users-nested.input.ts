import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutUsersInput } from './organization-create-or-connect-without-users.input';
import { OrganizationUpsertWithoutUsersInput } from './organization-upsert-without-users.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutUsersInput } from './organization-update-without-users.input';

@InputType()
export class OrganizationUpdateOneWithoutUsersNestedInput {

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutUsersInput)
    create?: OrganizationCreateWithoutUsersInput;

    @Field(() => OrganizationCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutUsersInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;

    @Field(() => OrganizationUpsertWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutUsersInput)
    upsert?: OrganizationUpsertWithoutUsersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutUsersInput)
    update?: OrganizationUpdateWithoutUsersInput;
}
