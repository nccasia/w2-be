import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutFilesInput } from './organization-create-without-files.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutFilesInput } from './organization-create-or-connect-without-files.input';
import { OrganizationUpsertWithoutFilesInput } from './organization-upsert-without-files.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutFilesInput } from './organization-update-without-files.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutFilesNestedInput {

    @Field(() => OrganizationCreateWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutFilesInput)
    create?: OrganizationCreateWithoutFilesInput;

    @Field(() => OrganizationCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutFilesInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutFilesInput;

    @Field(() => OrganizationUpsertWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutFilesInput)
    upsert?: OrganizationUpsertWithoutFilesInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutFilesInput)
    update?: OrganizationUpdateWithoutFilesInput;
}
