import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutOrganizationInput } from './file-update-without-organization.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => FileUpdateWithoutOrganizationInput)
    data!: FileUpdateWithoutOrganizationInput;
}
