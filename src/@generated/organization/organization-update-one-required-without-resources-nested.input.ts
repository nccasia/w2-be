import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutResourcesInput } from './organization-create-without-resources.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutResourcesInput } from './organization-create-or-connect-without-resources.input';
import { OrganizationUpsertWithoutResourcesInput } from './organization-upsert-without-resources.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutResourcesInput } from './organization-update-without-resources.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutResourcesNestedInput {

    @Field(() => OrganizationCreateWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutResourcesInput)
    create?: OrganizationCreateWithoutResourcesInput;

    @Field(() => OrganizationCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutResourcesInput;

    @Field(() => OrganizationUpsertWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutResourcesInput)
    upsert?: OrganizationUpsertWithoutResourcesInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutResourcesInput)
    update?: OrganizationUpdateWithoutResourcesInput;
}
