import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutVariantOfInput } from './file-create-without-variant-of.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutVariantOfInput } from './file-create-or-connect-without-variant-of.input';
import { FileUpsertWithWhereUniqueWithoutVariantOfInput } from './file-upsert-with-where-unique-without-variant-of.input';
import { FileCreateManyVariantOfInputEnvelope } from './file-create-many-variant-of-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutVariantOfInput } from './file-update-with-where-unique-without-variant-of.input';
import { FileUpdateManyWithWhereWithoutVariantOfInput } from './file-update-many-with-where-without-variant-of.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutVariantOfNestedInput {

    @Field(() => [FileCreateWithoutVariantOfInput], {nullable:true})
    @Type(() => FileCreateWithoutVariantOfInput)
    create?: Array<FileCreateWithoutVariantOfInput>;

    @Field(() => [FileCreateOrConnectWithoutVariantOfInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutVariantOfInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutVariantOfInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutVariantOfInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutVariantOfInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutVariantOfInput>;

    @Field(() => FileCreateManyVariantOfInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyVariantOfInputEnvelope)
    createMany?: FileCreateManyVariantOfInputEnvelope;

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

    @Field(() => [FileUpdateWithWhereUniqueWithoutVariantOfInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutVariantOfInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutVariantOfInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutVariantOfInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutVariantOfInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutVariantOfInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
