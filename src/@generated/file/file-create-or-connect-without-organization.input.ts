import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutOrganizationInput } from './file-create-without-organization.input';

@InputType()
export class FileCreateOrConnectWithoutOrganizationInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => FileCreateWithoutOrganizationInput)
    create!: FileCreateWithoutOrganizationInput;
}
