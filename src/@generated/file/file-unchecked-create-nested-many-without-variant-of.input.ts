import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutVariantOfInput } from './file-create-without-variant-of.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutVariantOfInput } from './file-create-or-connect-without-variant-of.input';
import { FileCreateManyVariantOfInputEnvelope } from './file-create-many-variant-of-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutVariantOfInput {

    @Field(() => [FileCreateWithoutVariantOfInput], {nullable:true})
    @Type(() => FileCreateWithoutVariantOfInput)
    create?: Array<FileCreateWithoutVariantOfInput>;

    @Field(() => [FileCreateOrConnectWithoutVariantOfInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutVariantOfInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutVariantOfInput>;

    @Field(() => FileCreateManyVariantOfInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyVariantOfInputEnvelope)
    createMany?: FileCreateManyVariantOfInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}
