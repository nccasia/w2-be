import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutFilesInput } from './organization-update-without-files.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutFilesInput } from './organization-create-without-files.input';

@InputType()
export class OrganizationUpsertWithoutFilesInput {

    @Field(() => OrganizationUpdateWithoutFilesInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutFilesInput)
    update!: OrganizationUpdateWithoutFilesInput;

    @Field(() => OrganizationCreateWithoutFilesInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutFilesInput)
    create!: OrganizationCreateWithoutFilesInput;
}
