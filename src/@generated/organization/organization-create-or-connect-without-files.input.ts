import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutFilesInput } from './organization-create-without-files.input';

@InputType()
export class OrganizationCreateOrConnectWithoutFilesInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutFilesInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutFilesInput)
    create!: OrganizationCreateWithoutFilesInput;
}
