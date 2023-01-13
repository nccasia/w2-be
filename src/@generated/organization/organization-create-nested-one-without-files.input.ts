import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutFilesInput } from './organization-create-without-files.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutFilesInput } from './organization-create-or-connect-without-files.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutFilesInput {

    @Field(() => OrganizationCreateWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutFilesInput)
    create?: OrganizationCreateWithoutFilesInput;

    @Field(() => OrganizationCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutFilesInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutFilesInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
