import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutOrganizationInput } from './file-create-without-organization.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutOrganizationInput } from './file-create-or-connect-without-organization.input';
import { FileUpsertWithWhereUniqueWithoutOrganizationInput } from './file-upsert-with-where-unique-without-organization.input';
import { FileCreateManyOrganizationInputEnvelope } from './file-create-many-organization-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutOrganizationInput } from './file-update-with-where-unique-without-organization.input';
import { FileUpdateManyWithWhereWithoutOrganizationInput } from './file-update-many-with-where-without-organization.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [FileCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => FileCreateWithoutOrganizationInput)
    create?: Array<FileCreateWithoutOrganizationInput>;

    @Field(() => [FileCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => FileCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyOrganizationInputEnvelope)
    createMany?: FileCreateManyOrganizationInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
