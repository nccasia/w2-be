import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutOrganizationInput } from './file-create-without-organization.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutOrganizationInput } from './file-create-or-connect-without-organization.input';
import { FileCreateManyOrganizationInputEnvelope } from './file-create-many-organization-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutOrganizationInput {

    @Field(() => [FileCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => FileCreateWithoutOrganizationInput)
    create?: Array<FileCreateWithoutOrganizationInput>;

    @Field(() => [FileCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutOrganizationInput>;

    @Field(() => FileCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyOrganizationInputEnvelope)
    createMany?: FileCreateManyOrganizationInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}
