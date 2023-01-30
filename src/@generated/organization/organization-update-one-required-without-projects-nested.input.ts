import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutProjectsInput } from './organization-create-without-projects.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutProjectsInput } from './organization-create-or-connect-without-projects.input';
import { OrganizationUpsertWithoutProjectsInput } from './organization-upsert-without-projects.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutProjectsInput } from './organization-update-without-projects.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => OrganizationCreateWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutProjectsInput)
    create?: OrganizationCreateWithoutProjectsInput;

    @Field(() => OrganizationCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput;

    @Field(() => OrganizationUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutProjectsInput)
    upsert?: OrganizationUpsertWithoutProjectsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutProjectsInput)
    update?: OrganizationUpdateWithoutProjectsInput;
}
